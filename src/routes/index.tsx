import Private from "./";
import Public from "./Public";
import { useLoginMutation } from "../services/authService";

const Routes = () => {
  const { data } = useLoginMutation({ fixedCacheKey: "auth-data" })[1];
  return data?.data?.token ? <Private /> : <Public />;
};

export default Routes;
