//IMPORTS //////////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Universal Styles ------------------------------------------
import "./App.css";

// Import Pages ---------------------------------------------
import SplashScreen from "./Content/1 Pages/SplashScreen";
import HomePage from "./Content/1 Pages/HomePage";
import ThemeHeaderPage from "./Content/1 Pages/Theme Section/ThemeHeaderPage";

// Import Music ---------------------------------------------- 
import Audio from "./Tools/Audio";
import music from "./Content/5 Assets/audio/music/music.mp3";

function App() {
  return (
    <div>
      <Audio audio={[music]} playAudio={0} loop />
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/" component={SplashScreen} />
          <Route path="/theme" component={ThemeHeaderPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
