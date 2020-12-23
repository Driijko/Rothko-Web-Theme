import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Pages ---------------------------------------------
import SplashScreen from "./Content/1 Pages/SplashScreen";
// Site Music 
import Audio from "./Tools/Audio";
import music from "./Content/5 Assets/audio/music/music.mp3";

function App() {
  return (
    <div className="App">
        <SplashScreen />
        <Audio audio={[music]} playAudio={0} loop />
        <Router>
          <Switch>
          </Switch>
        </Router>
      </div>
  );
};

export default App;
