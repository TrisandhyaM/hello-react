import React, { useState } from "react";
// import App from "../App";

const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, you are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default ConditionalRender;