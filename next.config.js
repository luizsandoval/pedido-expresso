/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
            },
        ],
        domains: ['firebasestorage.googleapis.com'],
    }
}

module.exports = nextConfig
