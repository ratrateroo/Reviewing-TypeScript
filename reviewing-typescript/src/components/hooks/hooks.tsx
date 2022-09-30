import React from "react";
const Hooks = () => {
  const [state, setState] = React.useState(false);
  // `state` is inferred to be a boolean
  // `setState` only takes booleans

  //Explicit Type declaration
  const [user, setUser] = React.useState<User | null>(null);

  //Type assertion
  const [user, setUser] = useState<User>({} as User);

  // later...
  setUser(newUser);
  // later...
  setUser(newUser);
  return <div>Hooks TypeScript</div>;
};
