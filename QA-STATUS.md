# Estado de verificación

## Comprobaciones ejecutadas en este entorno

- `pnpm install` completa con acceso a `registry.npmjs.org` y genera un `pnpm-lock.yaml` real.
- `CI=1 pnpm install --frozen-lockfile` pasa (requiere autorizar `esbuild`/`workerd` vía `allowBuilds` en `pnpm-workspace.yaml`).
- `pnpm check` (astro check + tsc) pasa con 0 errores y 0 avisos.
- `pnpm build` completa y genera `dist/client` y `dist/server`.
- `dist/client` contiene `robots.txt`, `manifest.webmanifest`, `sw.js`, `sitemap-index.xml` e `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon-maskable-512.png`.
- El HTML renderizado (verificado mediante un prerender temporal, ya revertido) incluye: `title` con nombre y ciudad, canonical, `hreflang`, Open Graph/Twitter con imagen absoluta, JSON-LD `TouristAttraction` / `WebSite` / `WebPage` / `BreadcrumbList` / `FAQPage`, H1 con ciudad, H2 de «Acerca de», «Historia y significado», «Ubicación y cómo visitar», «Monumentos y atractivos cerca», NAP y aviso de derechos de imagen.

## Comprobaciones estáticas

- No existe `pnpm-workspace.yaml`.
- No hay dominios de relleno `example.com` ni `localhost` en el código del sitio.
- No hay referencias `chrome-extension://`.
- `@astrojs/sitemap` deriva de `Astro.site` (por defecto `https://plazasotomayor.com`); no se declara `lastmod` manualmente.
- El iframe de Google Maps usa español (`es`) y región Chile (`cl`).
- `public/robots.txt` permite el rastreo y no bloquea recursos.

## Corrección de configuración

`wrangler.jsonc` usaba `"main": "dist/_worker.js/index.js"`, un valor obsoleto con `@astrojs/cloudflare` 14 que rompía tanto `pnpm check` como `pnpm build`. Se reemplazó por `"main": "@astrojs/cloudflare/entrypoints/server"`, el entrypoint que expone el adaptador.

> El entorno de ejecución usó Node 24.14.0 (el proyecto fija 24.21.0 en `.node-version`). En CI conviene usar la versión fijada.
