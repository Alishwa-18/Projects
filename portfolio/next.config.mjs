/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Deployed as a subfolder inside the "Projects" repo, so the live site
  // sits at https://alishwa-18.github.io/Projects/ instead of the root —
  // these two make every asset/link resolve correctly under that path.
  basePath: "/Projects",
  assetPrefix: "/Projects/",
};

export default nextConfig;
