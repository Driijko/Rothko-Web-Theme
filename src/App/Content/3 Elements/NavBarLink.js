// IMPORTS /////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import {useState, useEffect} from "react";

// Import components -------------------------------------------------
import StyledNavBarLink from "../4 Styling/StyledNavBarLink";
import RothkoDiv7 from "../4 Styling/RothkoDivs/RothkoDiv7";

// Audio imports -------------------------------------------------------
import Audio from "../../Tools/Audio";
import sfxNavLinkHighlight from "../5 Assets/audio/sfx/navLinkHighlight.mp3";
import sfxNavLinkSelected from "../5 Assets/audio/sfx/navLinkSelected.mp3";

export default function NavBarLink({
    children, spatial, width, focus, colors, enterSelect, linkTo, triggerExit,
    fontSize
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
            <RothkoDiv7
                spatial={spatial}
                colors={[colors[1], colors[3]]}
                width={width}
                interactivity={interactivity}

            />          
            <StyledNavBarLink 
                colors={[colors[0], colors[2]]}
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
            </StyledNavBarLink>
        </div>
    );   
};