const isGhPages = process.env.DEPLOY_TARGET === "GH_PAGES";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only needed for GitHub Pages static export
  ...(isGhPages ? { output: "export" } : {}),

  basePath: isGhPages ? "/Portfolio" : "",
  assetPrefix: isGhPages ? "/Portfolio/" : "",

  images: { unoptimized: true },
};

module.exports = nextConfig;
