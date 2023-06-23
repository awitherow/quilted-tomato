/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://forms.gle/LeZpFSEgu69wBgmYA",
        permanent: true,
      },
      {
        source: "/order",
        destination: "https://forms.gle/LeZpFSEgu69wBgmYA",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
