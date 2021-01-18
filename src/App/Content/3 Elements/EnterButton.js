// IMPORTS /////////////////////////////////////////////////////////////
// Import libraries -------------------------------------------------
import {useState, useEffect} from "react";
import styled, {css} from "styled-components";

// Import components ------------------------------------------------
import StyledNavLink from "../4 Styling/StyledNavLink";
import RothkoDiv1 from "../4 Styling/RothkoDivs/RothkoDiv1";

// Import helpers ----------------------------------------------------
import direction from "../4 Styling/helpers/direction";

// STYLE ////////////////////////////////////////////////////////////////
const FadeInRothkoDiv = styled(RothkoDiv1)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 4s linear forwards;
`;

const FadeInNavLink = styled(StyledNavLink)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 6s linear forwards;
`;

// ENTER BUTTON ////////////////////////////////////////////////////////
export default function EnterButton({
        colors, spatial, width, focus, enterSelect, linkTo, triggerExit
    }) {

    // HIGHLIGHTING ///////////////////////////////////////////////////////
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

    // Trigger sound effect and exiting phase for layer -------------------
    useEffect(()=> {
        if (selected) {
            triggerExit(linkTo);
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

    // RENDER ///////////////////////////////////////////////////////////////////////
    return (
        <div>
            <FadeInRothkoDiv 
                colors={colors}
                spatial={spatial}
                interactivity={interactivity}
                width={width}
                borderSize={15}
                blur={100}
            />
            <FadeInNavLink 
                colors={colors}
                spatial={spatial}
                width={width}
                interactivity={interactivity}
                fontSize={10}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                ENTER
            </FadeInNavLink>
        </div>

    );   
};