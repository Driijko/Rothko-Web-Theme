import {useState, useEffect} from "react";

import StyledNavLink from "../4 Styling/StyledNavLink";

// SFX IMPORTS ///////////////////////////////////////////////////////////
import Audio from "../../Tools/Audio";
import sfxNavLinkHighlight from "../5 Assets/audio/sfx/navLinkHighlight.mp3";
import sfxNavLinkSelected from "../5 Assets/audio/sfx/navLinkSelected.mp3";
import RothkoDiv1 from "../4 Styling/RothkoDivs/RothkoDiv1";
import RothkoDiv5 from "../4 Styling/RothkoDivs/RothkoDiv5";

export default function HomeButton({
    children, spatial, width, focus, colors, enterSelect, linkTo, triggerExit,
    fontSize, borderSize
}) {

    // SFX ///////////////////////////////////////////////////////////////////////////////
    // Sound effects are passed to the Audio component in an array.
    // We can determine which sound-effect to play by indicating an index for that 
    // array with 'playSfx'.
    const [playSfx, setPlaySfx] = useState(null);

    // HIGHLIGHTING //////////////////////////////////////////////////////////////////////
    const [highlight, setHighlight] = useState(null);

    // Focus -----------------------------------------------------------
    useEffect(()=> {
        if (focus) {
            setHighlight(true);
        }
        else if (highlight) {
            setHighlight(false);
        };
    },[focus]);

    // Mouse Handlers --------------------------------------------------
    function handleMouseEnter() {
        setHighlight(true);
    };

    function handleMouseLeave() {
        setHighlight(false);
    };

    // Sfx -----------------------------------------------------------------

    useEffect(()=> {
        if (highlight) {
            setPlaySfx(0);
        }
        else {
            setPlaySfx(null);
        }
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
            setPlaySfx(1);
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
            <RothkoDiv5
                spatial={[
                    spatial[0] - 2,
                    spatial[1] - 2,
                    spatial[2],
                    spatial[3],
                ]}
                width={width}
                interactivity={interactivity}
                colors={[colors[2], colors[0]]}
            />  
            <RothkoDiv1
                colors={colors}
                borderSize={borderSize}
                spatial={spatial}
                width={width}
                interactivity={interactivity}
                blur={200}
            />
            <StyledNavLink 
                colors={colors}
                spatial={spatial}
                width={width}
                interactivity={interactivity}
                fontSize={fontSize}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <Audio 
                    audio={[
                        sfxNavLinkHighlight,
                        sfxNavLinkSelected,
                    ]}
                    playAudio={playSfx}
                />
                {children}
            </StyledNavLink>
        </div>
    );   
};