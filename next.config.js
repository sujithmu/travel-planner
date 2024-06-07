/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    output: 'standalone',
    pageExtensions: ['ts', 'tsx'],
    generateBuildId: async () => {
        return `${Date.now() + Math.round(Math.random() * 2441139)}`;
    },
};

module.exports = nextConfig;
