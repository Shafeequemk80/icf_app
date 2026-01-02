import "./App.css";
import LandingPage from "./pages/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";

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
