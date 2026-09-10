# Estado de verificación

## Comprobaciones estáticas realizadas en el entorno de entrega

- No existe `pnpm-workspace.yaml`.
- No hay dominios de relleno `example.com` ni `localhost` en el código del sitio.
- No hay referencias `chrome-extension://`.
- No existe un sitemap escrito a mano; `@astrojs/sitemap` se habilita solo si `SITE` tiene valor.
- No se declara `lastmod` manualmente.
- El dominio canónico se obtiene exclusivamente de `SITE` → `Astro.site`.
- El iframe de Google Maps usa español (`es`) y región Chile (`cl`).

## Limitación del entorno de ejecución

El entorno usado para preparar este paquete no puede resolver `registry.npmjs.org` ni descargar binarios externos en este momento. Por ello no fue posible generar un `pnpm-lock.yaml` real ni ejecutar honestamente el ciclo `pnpm install --frozen-lockfile → pnpm check → pnpm build`.

No se ha simulado ni marcado falsamente esa prueba como aprobada. Para una entrega estrictamente CI-verificada, hace falta ejecutar `pnpm install` una vez con acceso al registro para crear el lockfile, y después repetir la secuencia de verificación de `README.md` en un entorno con red.
