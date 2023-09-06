import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import "./App.css";

function App() {
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

      <Profile />
    </main>
  );
}

export default App;
