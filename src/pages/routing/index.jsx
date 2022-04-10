import { Route, Switch } from "react-router-dom";
import Home from "../home";
import LoginPage from "../loginPage";

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;
