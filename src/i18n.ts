export type Lang = 'es' | 'en';

export type HreflangAlternate = { hreflang: string; href: string };

/**
 * Build hreflang alternate link declarations for a page that exists in one or
 * both languages. `paths` maps a hreflang code to its path (e.g. { 'es-cl': '/', 'en': '/en/' }).
 * An `x-default` entry is appended pointing at the primary (Spanish) path.
 */
export function buildAlternates(siteUrl: string, paths: Record<string, string>): HreflangAlternate[] {
  const base = siteUrl.replace(/\/$/, '');
  const list: HreflangAlternate[] = Object.entries(paths).map(([hreflang, path]) => ({
    hreflang,
    href: base + path
  }));
  const xDefaultPath = paths['es-cl'] ?? paths['es'] ?? Object.values(paths)[0] ?? '/';
  list.push({ hreflang: 'x-default', href: base + xDefaultPath });
  return list;
}
