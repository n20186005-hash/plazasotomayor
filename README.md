# Plaza Sotomayor — sitio turístico independiente

Sitio de una página en español de Chile, construido con Astro, Tailwind CSS y TypeScript, preparado para Cloudflare Workers.

## Versiones fijadas

- Node.js 24.21.0
- pnpm 12.3.4
- Astro 7.3.2
- Tailwind CSS 4.3.3
- TypeScript 6.0.3 (dentro del rango compatible de `@astrojs/check` 0.9.10)

No se usa `pnpm-workspace.yaml` porque es un proyecto de un solo paquete.

## Dominio: un único punto de configuración

El dominio no está codificado en componentes. Configure una sola variable `SITE`; Astro la toma como su campo `site`:

```bash
SITE=https://tu-dominio.cl pnpm build
```

Si `SITE` está vacío, el proyecto sigue siendo válido: no emite canonical/`og:url` absolutos y no activa `@astrojs/sitemap`. Cuando `SITE` tiene un dominio real, canonical, Open Graph, JSON-LD y sitemap derivan de `Astro.site`.

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

Con `SITE` vacío, no debe generarse un sitemap. Con un dominio real configurado, `@astrojs/sitemap` genera el sitemap automáticamente y no se define `lastmod` manualmente.

## Cloudflare Workers

`wrangler.jsonc` apunta al Worker generado por Astro en `dist/_worker.js/index.js`. Para desplegar:

```bash
SITE=https://tu-dominio.cl pnpm deploy
```

## Imágenes y licencias

La interfaz, logo, favicon y Open Graph son locales. Las fotografías de contenido están referenciadas desde Wikimedia Commons con sus atribuciones CC visibles en la página. Si se requiere un paquete 100 % offline, descargue los cuatro archivos indicados en `PHOTO-ASSETS.md`, colóquelos en `public/images/photos/` y sustituya los `src` en `src/data/place.ts`.

## GA4 y cookies

Measurement ID: `G-HXM22WWPKP`. El script oficial de Google se inserta solo después de aceptar analítica. El rechazo deja `analytics_storage` denegado.
