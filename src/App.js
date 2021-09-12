import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import New from "./pages/New";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-testimony" exact component={New} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
