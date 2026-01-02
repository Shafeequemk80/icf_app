import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import CrashTest from "./components/CrashTest";

function App() {
  return (
    <>
      <ErrorBoundary>
        <>
          <LandingPage />
        </>
      </ErrorBoundary>
    </>
  );
}

export default App;
