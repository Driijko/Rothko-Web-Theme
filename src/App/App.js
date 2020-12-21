import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Content/1 Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
