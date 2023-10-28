import { useSelector } from "react-redux";
import Private from "./Private";
import Public from "./Public";

const Routes = () => {
  const token = useSelector((state: any) => state?.auth?.token);
  return token ? <Private /> : <Public />;
};

export default Routes;
