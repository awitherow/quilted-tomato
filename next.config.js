/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://forms.gle/k15C2vWyy1mkH5hv5",
        permanent: true,
      },
      {
        source: "/order",
        destination: "https://forms.gle/k15C2vWyy1mkH5hv5",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
