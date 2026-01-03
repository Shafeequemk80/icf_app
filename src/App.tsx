import LandingPage from "./pages/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<LandingPage />} />

        <Route element={<ProtectedLayout />}>

          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
