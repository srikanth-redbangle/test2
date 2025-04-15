/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //basePath:'/abc',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/abc',
        permanent: false, // set to true if you're sure
      },
    ];
  },
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig
