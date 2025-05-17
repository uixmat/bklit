import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { initBklit } from "bklit";

// IMPORTANT: Replace with a real Site ID from your main tracker application dashboard
const YOUR_SITE_ID = "cmase2cj00001510wrxmy9p5h";

function App() {
  useEffect(() => {
    // Simplified the condition as we now have a real ID
    if (YOUR_SITE_ID) {
      console.log(
        `Playground: Initializing Bklit with siteId: ${YOUR_SITE_ID}`
      );
      initBklit({ siteId: YOUR_SITE_ID });
      // If your bklit-sdk's DEFAULT_API_HOST (currently http://localhost:3000/api/track) is different,
      // or you want to override it for testing against a different backend:
      // initBklit({ siteId: YOUR_SITE_ID, apiHost: 'http://localhost:3000/api/track' });
    } else {
      // This else case should ideally not be hit if YOUR_SITE_ID is correctly set directly.
      console.warn(
        "Playground: SITE_ID is not set. Tracking will not be initialized."
      );
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Playground</h1>
      <p className="read-the-docs">
        This site is a testbed for Bklit analytics.
      </p>
      {YOUR_SITE_ID ? (
        <p>Tracking initialized with Site ID: {YOUR_SITE_ID}</p>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          SITE_ID not configured in src/App.tsx. Tracking disabled.
        </p>
      )}
    </>
  );
}

export default App;
