/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        typedRoutes: true,
        /*fontLoaders: [
            {
                loader: '@next/font/google',
                options: {
                    subsets: ['latin']
                }
            },
        ],*/
    }
}

module.exports = nextConfig
