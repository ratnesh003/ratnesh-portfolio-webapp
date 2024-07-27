/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'ratnesh-portfolio-webapp.prismic.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
                port: '',
            },
        ]
    }
};

export default nextConfig;
