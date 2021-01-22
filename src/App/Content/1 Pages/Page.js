// IMPORTS //////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {useState, useEffect, Children, cloneElement} from "react";
import {Redirect} from "react-router-dom";
import styled, {css} from "styled-components";

// Import Components -----------------------------------------------------
import UniformResponse from "../../Tools/UniformResponse/UniformResponse";
import Gutter from "../2 Layers/Gutter";
import SiteDiv from "./SiteDiv";

// Import Custom Hooks ----------------------------------------------------
import useKey from "../../Tools/useKey";

// Import helpers -----------------------------------------------------------
import direction from "../4 Styling/helpers/direction";

// Sfx Imports -----------------------------------------------------------------
import Audio from "../../Tools/Audio";
import sfxEnterExit from "../5 Assets/audio/sfx/enterExit.mp3";

// STYLE ////////////////////////////////////////////////////////////////////
function animate(phase) {
    if (phase === "enter") {
        return css`
            animation: ${direction("opacity: 0", "opacity: 1")} ${enterTime}s ease-out forwards;
        `;
    }
    else if (phase === "exiting" || phase === "exit") {
        return css`
            animation: ${direction("opacity: 1", "opacity: 0")} ${exitTime}s ease-out forwards;
        `;
    };
};

const PageDiv = styled("div")`${({phase})=>css`
    ${animate(phase)};
`}`;

// SETTINGS /////////////////////////////////////////////////////////////////
const enterTime = 2;
const exitTime = 2;

export default function Page({children, maxFocusableElements}) {

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
            if (tabIndex > maxFocusableElements) {
                setTabIndex(1);
            }
            else {
                setTabIndex(tabIndex + 1);
            };
        };
    },[tab]);

    // CHILDREN PROPS ////////////////////////////////////////////////////////////////
    // Here we add props to the child elements, aka  layers
    const layers = [];
    Children.forEach(children, (child, index) => {
        if (index === 0) {
            layers.push(
                cloneElement(child, {
                    tabIndex: tabIndex,
                    enterSelect: enter,
                    "triggerExit": triggerExit,
                })
            );
            layers.push(
                <Gutter />
            );
        }
        else {
            layers.push(child);
        };
    });

    // RENDER ////////////////////////////////////////////////////////////

    return (
        <div>
            <SiteDiv />
            <PageDiv phase={phase}>
                {phase === "exit" ?
                    <Redirect to={leaveTo}/>
                    : null
                } 
                <Audio audio={[sfxEnterExit]} playAudio={playSfx} />
                <UniformResponse>
                    {layers}
                </UniformResponse>
            </PageDiv>
        </div>

    );
};