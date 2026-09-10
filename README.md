# Plaza Sotomayor — sitio turístico independiente

Sitio de una página en español de Chile, construido con Astro, Tailwind CSS y TypeScript, preparado para Cloudflare Workers.

## Versiones fijadas

- Node.js 24.21.0
- pnpm 12.3.4
- Astro 7.3.2
- Tailwind CSS 4.3.3
- TypeScript 6.0.3 (dentro del rango compatible de `@astrojs/check` 0.9.10)

`pnpm-workspace.yaml` no define un workspace multi-paquete; solo autoriza los scripts de build de `esbuild` y `workerd` (`allowBuilds`), que pnpm bloquea por defecto. Sin esa declaración, `CI=1 pnpm install --frozen-lockfile` falla con `ERR_PNPM_IGNORED_BUILDS`. El proyecto mantiene un `pnpm-lock.yaml` real para instalaciones reproducibles.

## Dominio: un único punto de configuración

El dominio no está codificado en los componentes: se resuelve con la variable `SITE`, que Astro usa como su campo `site`.

```bash
SITE=https://plazasotomayor.com pnpm build
```

El valor por defecto es `https://plazasotomayor.com`. Así, un build sin variables ya emite canonical, `og:url`, JSON-LD y sitemap absolutos. Para apuntar a otro dominio (por ejemplo, un entorno de pruebas), exporte `SITE` antes del build. Canonical, Open Graph, JSON-LD, `hreflang` y sitemap derivan siempre de `Astro.site`.

## Desarrollo

```bash
corepack enable
corepack prepare pnpm@12.3.4 --activate
pnpm install
pnpm check
pnpm build
```

## Verificación de entrega esperada

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build

grep -RInE 'example\\.com|localhost|chrome-extension://' dist || true
```

`@astrojs/sitemap` genera `sitemap-index.xml` a partir de `Astro.site`; no se define `lastmod` manualmente.

## Cloudflare Workers

`wrangler.jsonc` usa el entrypoint que expone el adaptador (`@astrojs/cloudflare/entrypoints/server`) y el binding `ASSETS` sobre `./dist`, tal como espera `@astrojs/cloudflare` 14 con Astro 7. Para desplegar:

```bash
SITE=https://tu-dominio.cl pnpm deploy
```

## Imágenes y licencias

La interfaz, logo, favicon, iconos PWA y la imagen Open Graph son locales. Las fotografías de contenido están referenciadas desde Wikimedia Commons con sus atribuciones CC visibles en la página. La página y el pie muestran un aviso de derechos: todas las imágenes pertenecen a sus fotógrafos originales. Si se requiere un paquete 100 % offline, descargue los cuatro archivos indicados en `PHOTO-ASSETS.md`, colóquelos en `public/images/` y sustituya los `src` en `src/data/place.ts`.

## GA4 y cookies

Measurement ID: `G-HXM22WWPKP`. El script oficial de Google se inserta solo después de aceptar analítica. El rechazo deja `analytics_storage` denegado.

## SEO y datos estructurados

La página declara en JSON-LD `TouristAttraction` + `LandmarksOrHistoricalBuildings` (con `@id`, `alternateName`, imagen, dirección con `postalCode`, coordenadas, `containedInPlace`, `hasMap`, `isAccessibleForFree` y `sameAs`), `WebSite`, `WebPage`, `BreadcrumbList` y `FAQPage`. El `<head>` incluye TDK, `robots`, canonical, `hreflang`, Open Graph y Twitter Card con imagen absoluta.

El contenido refuerza la equivalencia de entidad («Plaza Sotomayor» = plaza central de Valparaíso) y la jerarquía geográfica Valparaíso → Región de Valparaíso → Chile, con nombre oficial, dirección (NAP) e imágenes con `alt` semántico. `public/robots.txt` permite el rastreo y apunta al sitemap.

Componentes nuevos:

- `src/components/Breadcrumbs.astro` — ruta geográfica visible.
- `src/components/SourcesSection.astro` — fuentes, NAP, enlace oficial de turismo y derechos de imagen.

## PWA

- `public/manifest.webmanifest` — nombre, iconos 192/512/maskable, `theme_color` y accesos directos.
- `public/sw.js` — precarga el shell y acelera visitas repetidas; la navegación usa estrategia network-first.
- `public/icons/icon-192.png`, `public/icons/icon-512.png`, `public/icons/icon-maskable-512.png`.
- El registro del service worker se hace de forma diferida en `src/layouts/BaseLayout.astro`.
