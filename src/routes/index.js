import { Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Settings from "../components/Settings";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
      <Route path="/settings" exact component={Settings} />
    </>
  );
};

export default Routes;
