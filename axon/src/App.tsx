import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthPage } from "./pages/AuthPage";
import { Dashboard } from "./pages/Dashboard";
import { PublicProfile } from "./pages/PublicProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/:username" element={<PublicProfile />} />
    </Routes>
  );
}

export default App;