import { Login } from "./Login";
import { ProfileProps } from "./Profile";
//using type for component as props
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
};
