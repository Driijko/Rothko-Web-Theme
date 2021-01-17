import {useState, useEffect} from "react";
import styled, {css} from "styled-components";

import StyledNavLink from "../4 Styling/StyledNavLink";
import RothkoDiv from "../4 Styling/RothkoDiv";

import direction from "../4 Styling/helpers/direction";

// SFX IMPORTS ///////////////////////////////////////////////////////////
import Audio from "../../Tools/Audio";

const FadeInRothkoDiv = styled(RothkoDiv)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 4s linear forwards;
`;

const FadeInNavLink = styled(StyledNavLink)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 7s linear forwards;
`;

export default function EnterButton({
        colors, children, spatial, width, focus, enterSelect, 
        linkTo, triggerExit
    }) {

    // SFX ///////////////////////////////////////////////////////////////////////////////
    // Sound effects are passed to the Audio component in an array.
    // We can determine which sound-effect to play by indicating an index for that 
    // array with 'playSfx'.
    // const [playSfx, setPlaySfx] = useState(null);

    // HIGHLIGHTING //////////////////////////////////////////////////////////////////////
    const [highlight, setHighlight] = useState(null);

    // Focus -----------------------------------------------------------
    // useEffect(()=> {
    //     if (focus) {
    //         setHighlight(true);
    //     }
    //     else if (highlight) {
    //         setHighlight(false);
    //     };
    // },[focus]);

    // Mouse Handlers --------------------------------------------------
    function handleMouseEnter() {
        setHighlight(true);
    };

    function handleMouseLeave() {
        setHighlight(false);
    };

    // Sfx -----------------------------------------------------------------

    useEffect(()=> {
        // if (highlight) {
        //     setPlaySfx(0);
        // }
        // else {
        //     setPlaySfx(null);
        // }
        console.log(highlight);
    },[highlight]);

    // SELECTION //////////////////////////////////////////////////////////////////////////
    const [selected, setSelected] = useState(false);

    // Mouse Handler ------------------------------------------
    function handleClick() {
        setSelected(true);
    };

    // User presses 'enter' key --------------------------------
    useEffect(()=> {
        if (enterSelect) {
            setSelected(true);
        };
    }, [enterSelect]);

    // Trigger sound effect and exitting phase for layer -------------------
    useEffect(()=> {
        if (selected) {
            triggerExit(linkTo);
            // setPlaySfx(1);
        };
    },[selected]);

    // INTERACTIVITY /////////////////////////////////////////////////////
    const [interactivity, setInteractivity] = useState("able");

    useEffect(()=> {
        if (interactivity !== "dormant") {
            if (selected) {
                setInteractivity("selected");
            }
            else if (highlight) {
                setInteractivity("highlight");
            }
            else {
                setInteractivity("able");              
            };
        }
    }, [highlight, selected])

    // RENDER /////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <FadeInRothkoDiv 
                colors={colors}
                spatial={spatial}
                interactivity={interactivity}
                width={width}
                borderSize={20}
            />
            <FadeInNavLink 
                colors={colors}
                spatial={spatial}
                width={width}
                interactivity={interactivity}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                {/* <Audio 
                    audio={[
                        sfxNavLinkHighlight,
                        sfxNavLinkSelected,
                    ]}
                    playAudio={playSfx}
                /> */}
                ENTER
            </FadeInNavLink>
        </div>

    );   
};