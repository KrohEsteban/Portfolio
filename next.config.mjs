const isAnalyze = process.env.ANALYZE === 'true';
const withBundleAnalyzer = isAnalyze
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config) => config;

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['api.estebankroh.com'],
  },
});

export default nextConfig;
