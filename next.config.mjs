/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    domains: ["api.estebankroh.com"],
  },
};

// Configuración del Bundle Analyzer
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // Activa el análisis con la variable de entorno
});

export default withAnalyzer(nextConfig);
