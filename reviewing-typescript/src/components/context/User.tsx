import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    // if (userContext) {
    userContext.setUser({
      name: "Coleen Wing",
      email: "ironfist@marvel.com",
    });
    // }
  };
  const handleLogout = () => {
    // if (userContext) {
    userContext.setUser(null);
    // }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* <div>User name is {userContext?.user?.name}</div> */}
      {/* <div>User email is {userContext?.user?.email}</div> */}

      {/* using type assertion on UserContext, optional chaining for userContext in no longer needed */}
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};
