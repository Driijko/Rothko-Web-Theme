import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Site Music 
import Audio from "./Tools/Audio";
import music from "./Content/5 Assets/audio/music/music.mp3";

function App() {
  return (
    <div className="App">
        <Audio audio={[music]} playAudio={0} loop />
        <Router>
          <Switch>
          </Switch>
        </Router>
      </div>
  );
};

export default App;
