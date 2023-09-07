/** @type {import('next').NextConfig} */
const nextConfig = {
    async generateStaticParams() {
        // Return an array of paths you want to statically generate
        return ['/']; // Add more paths as needed
      },
      output: 'export'
}

module.exports = nextConfig
