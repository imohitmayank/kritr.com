import type { NextConfig } from "next";

function sanitizeBasePath(input?: string) {
  if (!input || input === "/") {
    return "";
  }

  return input.endsWith("/") ? input.slice(0, -1) : input;
}

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const inferredBasePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName &&
  !repoName.endsWith(".github.io")
    ? `/${repoName}`
    : "";

const configuredBasePath =
  process.env.PAGES_BASE_PATH !== undefined
    ? process.env.PAGES_BASE_PATH
    : inferredBasePath;

const basePath = sanitizeBasePath(configuredBasePath);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
