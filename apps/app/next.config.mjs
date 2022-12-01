/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@packages/graphql", "@packages/database"],
};

export default nextConfig;
