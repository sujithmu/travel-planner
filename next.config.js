/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx'],
    generateBuildId: async () => {
        return `${Date.now() + Math.round(Math.random() * 2441139)}`;
    },
};

export default nextConfig;
