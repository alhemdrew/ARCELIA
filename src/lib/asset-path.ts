export function assetPath(p: string) {
  const isProd = process.env.NODE_ENV === "production";
  return (isProd ? "/ARCELIA" : "") + p;
}

export default assetPath;
