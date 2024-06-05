/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    pageExtensions: ['ts', 'tsx'],
    generateBuildId: async () => {
        return `${Date.now() + Math.round(Math.random() * 2441139)}`;
    },
};

module.exports = nextConfig;
