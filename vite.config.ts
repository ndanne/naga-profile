import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// Get repository name dynamically
function getRepoName(): string {
  // Try from environment variable first (GitHub Actions)
  if (process.env.GITHUB_REPOSITORY) {
    return process.env.GITHUB_REPOSITORY.split("/")[1];
  }

  // Fallback to default
  return "naga-profile";
}

const isProd = process.env.NODE_ENV === "production";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const useGitHubPagesBase = isProd && isGitHubActions;
const repo = getRepoName();

export default defineConfig(() => ({
  plugins: [react(), tsconfigPaths()],
  base: useGitHubPagesBase ? `/${repo}/` : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
