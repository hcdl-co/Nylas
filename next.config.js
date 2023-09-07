/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: async function () {
        return {
          '/': { page: '/' },
          // Add more pages as needed
        };
      },
}

module.exports = nextConfig
