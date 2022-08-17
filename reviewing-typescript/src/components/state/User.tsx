//using type inference for the initial type of the state
//state can be AuthUser or Null
//optional chaining is required to access the values of state objects

//using type assertion for user status if the value of state is certain and will not be different shape
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserStatus = {
  status: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userStatus, setUserStatus] = useState<UserStatus>({} as UserStatus);
  const handleLogin = () => {
    setUser({
      name: "Coleen Wing",
      email: "ironfist@marvel.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>User status: {userStatus.status === "guest" ? "Guest" : "User"} </h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
    </div>
  );
};
