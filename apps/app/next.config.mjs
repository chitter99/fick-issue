/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@packages/graphql", "@packages/database"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      return {
        ...config,
        externals: [
          {
            "@pothos/core": "@pothos/core",
            "@pothos/plugin-prisma": "commonjs @pothos/plugin-prisma",
          },
          ...config.externals,
        ],
      };
    }

    return config;
  },
};

export default nextConfig;
