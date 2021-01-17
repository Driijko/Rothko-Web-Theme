import {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import styled, {css} from "styled-components";

import UniformResponse from "../../Tools/UniformResponse/UniformResponse";

import SplashIntro from "../2 Layers/Splash/SplashIntro";
import Gutter from "../2 Layers/Gutter";

// SETTINGS ///////////////////////////////////////////////////////////
const exitTime = 2;

// STYLE ////////////////////////////////////////////////////////////
function transitions(phase) {
    if (phase === "exiting") {
        return `
            transition-duration: ${exitTime}s;
            opacity: 0;
        `;
    }
    else return "opacity: 1";
}
const PageDiv = styled("div")`${({phase})=>css`
    ${transitions(phase)}
`}`;

export default function SplashScreen(props) {

    // PHASE /////////////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("steady");
    const [leaveTo, setLeaveTo] = useState(null);

    useEffect(()=> {
        if (phase === "exiting") {
            const timerId = setTimeout(()=> {
                setPhase("exit");
                clearTimeout(timerId);
            }, exitTime * 1000);
        };
    }, [phase]);

    // Passed down to links so they can trigger "exiting" phase.
    function triggerExit(to) {
        if (phase !== "exiting") {
            setLeaveTo(to);
            setPhase("exiting");
        };
    };

    return (
        <PageDiv phase={phase}>
            {phase === "exit" ?
                <Redirect to={leaveTo}/>
                : null
            } 
            <UniformResponse>
                <SplashIntro triggerExit={triggerExit} />        
                <Gutter />
            </UniformResponse>
        </PageDiv>
    );
};