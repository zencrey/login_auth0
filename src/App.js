import React from "react";
import "./app.css";
import LoginButton from "./compents/LoginButton";
import LogoutButton from "./compents/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./compents/Profile";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
};

export default App;
