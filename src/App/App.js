import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Content/1 Pages/HomePage";
import Page1 from "./Content/1 Pages/Page1";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
