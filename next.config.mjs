// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other config...
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[hash][ext][query]",
      },
    });
    return config;
  },
};

export default nextConfig;