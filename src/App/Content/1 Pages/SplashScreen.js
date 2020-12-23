import {useState} from "react";

import UniformResponse from "../../Tools/UniformResponse/UniformResponse";

import SplashIntro from "../2 Layers/Splash/SplashIntro";
import SplashSteady from "../2 Layers/Splash/SplashSteady";
import Gutter from "../2 Layers/Gutter";

export default function SplashScreen(props) {
    const [phase, setPhase] = useState("intro");

    return (
        <UniformResponse>
            {phase === "intro" ?
                <SplashIntro />
                : <SplashSteady />
            }
            <Gutter />
        </UniformResponse>
    );
};