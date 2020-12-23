import {useState} from "react";

import SplashIntro from "./SplashIntro";
import SplashSteady from "./SplashSteady";

export default function Splash(props) {
    const [phase, setPhase] = useState("intro");

    return (
        phase === "intro" ?
            <SplashIntro />
            : <SplashSteady />
    );
};