import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main>
      <h1>Auth0 Login</h1>
      <div className="wrapper">
        <div className="homeWrapper">Home</div>
        <div className="otherWrapper">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>

      <Routes>
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <LoginButton />}
        />
      </Routes>
    </main>
  );
}

export default App;
