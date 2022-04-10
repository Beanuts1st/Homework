import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./pages/routing";

function App() {
  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}

export default App;
