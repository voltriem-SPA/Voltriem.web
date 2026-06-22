export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const basePath = base.endsWith("/") ? base.slice(0, -1) : base;
  const assetPath = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return assetPath;
  return `${basePath}${assetPath}`;
}
