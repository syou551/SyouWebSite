/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fpiccdn.com',
            port: '',
            pathname: '/30615s/**'
          },
        ],
    },
};


export default nextConfig;
