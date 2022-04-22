import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./components/routing";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
