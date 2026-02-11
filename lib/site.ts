/** Base path for GitHub Pages (e.g. /jonesbrothers). Use for public asset URLs in static export. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  return path.startsWith('/') ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
}
