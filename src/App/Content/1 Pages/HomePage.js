// IMPORTS ///////////////////////////////////////////////////////////////////
// Import from libraries --------------------------------------------------
import {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import styled, {css} from "styled-components";

// Import Components -----------------------------------------------------
import UniformDesign from "../../Tools/UniformResponse/UniformResponse";
import Layer1 from "../2 Layers/Layer1";
import Layer2 from "../2 Layers/Layer2";
import Gutter from "../2 Layers/Gutter";

// Import Custom Hooks ----------------------------------------------------
import useKey from "../../Tools/useKey";

// Import helpers -----------------------------------------------------------
import direction from "../4 Styling/helpers/direction";

// Sfx Imports -----------------------------------------------------------------
import Audio from "../../Tools/Audio";
import sfxEnterExit from "../5 Assets/audio/sfx/enterExit.mp3";

// STYLE ////////////////////////////////////////////////////////////////////
const transit = `opacity: 0`;
const steady = `opacity: 1`;

function transistion(phase) {
    if (phase === "enter") {
        return css`
            animation: ${direction(transit, steady)} ${enterTime}s ease-out forwards;
        `;
    }
    else if (phase === "exiting" || phase === "exit") {
        return css`
            animation: ${direction(steady, transit)} ${exitTime}s ease-out forwards;
        `;
    };
};

const PageDiv = styled("div")`${props=>css`
    ${transistion(props.phase)};
`}`;

// Settings /////////////////////////////////////////////////////////////////
const maxFocusableElements = 3;
const enterTime = 4;
const exitTime = 2;

export default function HomePage(props) {

    // SFX //////////////////////////////////////////////////////////////////
    const [playSfx, setPlaySfx] = useState(0);

    // PHASE /////////////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("enter");
    const [checkReadyForSteady, setCheckReadyForSteady] = useState(false);
    const [toSteadyTimerId, setToSteadyTimerId] = useState(null);
    const [leaveTo, setLeaveTo] = useState(null);

    // This 'useEffect' is a bit complicated due to the possibility
    // that a user may want to exit a page before the "enter" phase is
    // finished. Making the enter phase cancelable requires us to include
    // the 'checkReadyForSteady' and 'toSteadyTimerId' state variables.
    useEffect(()=> {
        if (phase === "enter") {
            setPlaySfx(null);
            setToSteadyTimerId(setTimeout(() => {
                if (phase === "enter") {
                    setCheckReadyForSteady(true);
                };
                clearTimeout(toSteadyTimerId);
            }, enterTime * 1000));
        }
        else if (phase === "exiting") {
            const timerId = setTimeout(()=> {
                setPhase("exit");
                clearTimeout(timerId);
            }, exitTime * 1000);
        };
        return () => {
            clearTimeout(toSteadyTimerId);
            return toSteadyTimerId;
        };
    }, [phase]);

    useEffect(()=> {
        if (checkReadyForSteady && phase === "enter") {
            setPhase("steady");
        };
    }, [checkReadyForSteady]);

    // Passed down to links so they can trigger "exiting" phase.
    function triggerExit(to) {
        if (phase !== "exiting") {
            setLeaveTo(to);
            setPhase("exiting");
            setPlaySfx(0);
        };
    };

    // FOCUS and ENTERSELECT /////////////////////////////////////////////////
    const [tabIndex, setTabIndex] = useState(0);

    // 'useKey' returns true if key is held down.
    const tab = useKey("Tab");
    const enter = useKey("Enter");

    useEffect(()=> {
        if (tab) {
            if (tabIndex === maxFocusableElements) {
                setTabIndex(1);
            }
            else {
                setTabIndex(tabIndex + 1);
            };
        };
    },[tab]);

    // RENDER ////////////////////////////////////////////////////////////

    return (
        <div style={{backgroundColor: "black"}}>
            <PageDiv phase={phase}>
                {phase === "exit" ?
                    <Redirect to={leaveTo}/>
                    : null
                } 
                <Audio audio={[sfxEnterExit]} playAudio={playSfx} />
                <UniformDesign>
                    <Layer1 
                        tabIndex={tabIndex}
                        enter={enter}
                        triggerExit={triggerExit}
                    />
                    <Gutter />
                    <Layer2 />
                </UniformDesign>
            </PageDiv>
        </div>
    );
};