import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";

// Get base name for routing (GitHub Pages)
function getBasename(): string {
  const isProd = import.meta.env.PROD;
  const isGitHubPages = window.location.hostname.includes("github.io");

  if (isProd && isGitHubPages) {
    // Extract repo name from pathname: /repo-name/path -> /repo-name
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      return `/${pathSegments[0]}`;
    }
  }

  return "/";
}

function App() {
  const basename = getBasename();
  console.log("🚀 Router basename:", basename);

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
