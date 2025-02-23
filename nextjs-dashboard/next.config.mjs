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
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**'
          },
          {
            protocol: 'https',
            hostname: 'coder.syou551.dev',
            port: '',
            pathname: '/_static/**'
          },
        ],
    },
};


export default nextConfig;
