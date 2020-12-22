import {useState, useEffect} from "react";

import StyledNavLink from "../4 Styling/StyledNavLink";

// SFX IMPORTS ///////////////////////////////////////////////////////////
import Audio from "../../Tools/Audio";
import sfxNavLinkHighlight from "../5 Assets/audio/sfx/navLinkHighlight.mp3";
import sfxNavLinkSelected from "../5 Assets/audio/sfx/navLinkSelected.mp3";

export default function NavLink({children, spatial, width, focus, enterSelect, linkTo, triggerExit}) {

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
        else if (highlight === true) {
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
    },[selected])

    // RENDER /////////////////////////////////////////////////////////////////////////////

    return (
        <StyledNavLink 
            spatial={spatial}
            width={width}
            highlight={highlight}
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
    );   
};