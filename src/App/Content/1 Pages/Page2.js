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
    background-color: black;
    ${transistion(props.phase)};
`}`;

// Settings /////////////////////////////////////////////////////////////////
const maxFocusableElements = 5;
const enterTime = 4;
const exitTime = 2;

export default function Page1(props) {

    // PHASE /////////////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("enter");
    const [checkReadyForSteady, setCheckReadyForSteady] = useState(false);
    const [toSteadyTimerId, setToSteadyTimerId] = useState(null);
    const [leaveTo, setLeaveTo] = useState(null);

    useEffect(()=> {
        if (phase === "enter") {
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
        setLeaveTo(to);
        setPhase("exiting");
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

    return (
        <PageDiv phase={phase}>
            {phase === "exit" ?
                <Redirect to={leaveTo}/>
                : null
            } 
            <UniformDesign>
                <Layer2 />
                <Gutter />
            </UniformDesign>
        </PageDiv>
    );
};