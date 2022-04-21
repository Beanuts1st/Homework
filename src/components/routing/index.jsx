import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import LoginPage from "../../pages/loginPage";
import { selectToken } from "../redux/tokenSlice";

const Routing = () => {
  const token = useSelector(selectToken);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage />
          {token && <Redirect to="/home" />}
        </Route>
        <Route exact path="/home">
          <Home />
          {!token && <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;
