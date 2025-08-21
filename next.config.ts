import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Évite d’échouer le build si ESLint n’est pas installé/configuré
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Autorise les images distantes utilisées dans le site
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/api/**",
      },
    ],
  },

  // (Option de secours si d'autres erreurs TS bloquent encore le build)
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;

