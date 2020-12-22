import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Content/1 Pages/HomePage";
import Page1 from "./Content/1 Pages/Page1";
import Page2 from "./Content/1 Pages/Page2";

// Site Music 
import Audio from "./Tools/Audio";
import music from "./Content/5 Assets/audio/music/music.mp3";

function App() {
  return (
    <div className="App">
      <Audio audio={[music]} playAudio={0} loop />
      <Router>
        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
