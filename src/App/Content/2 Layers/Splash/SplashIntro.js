// IMPORTS //////////////////////////////////////////////////////////
// Import Libraries ------------------------------------------------
import {useState, useEffect} from "react";
import styled from "styled-components";

// Import components -----------------------------------------------
import RothkoDiv2 from "../../4 Styling/RothkoDivs/RothkoDiv2";
import StyledH1 from "../../4 Styling/Headers/StyledH1";
import StyledPhrase from "../../4 Styling/Text/StyledPhrase";
import StyledImg from "../../4 Styling/StyledImg";
import EnterButton from "../../3 Elements/EnterButton";

// Import helper functions -----------------------------------------
import direction from "../../4 Styling/helpers/direction";
import useKey from "../../../Tools/useKey";

// Import assets ---------------------------------------------------
import logo from "../../5 Assets/visual/icons/logo448x143.png";

// STYLE ///////////////////////////////////////////////////////////////
const LayerDiv = styled("div")`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: black;
`;

const H1 = styled(StyledH1)`
    opacity: 0;
    color: hsl(200, 100%, 50%);
    text-shadow: 2px 2px 10px black;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 3s linear forwards;
`;

const Phrase = styled(StyledPhrase)`
    opacity: 0;
    color: hsl(200, 100%, 60%);
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 4s linear forwards;
`;

const Logo = styled(StyledImg)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 5s linear forwards;
`;

// SETTINGS /////////////////////////////////////////////////////////////
const maxFocusableElements = 1;

export default function SpashIntro({width, triggerExit}) {

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

    // RENDER /////////////////////////////////////////////////////////

    return (
        <LayerDiv>
            <RothkoDiv2 
                spatial={[0, 0, 20, 19]} 
                width={width}
                color={"hsl(200, 100%, 50%)"} 
            />
            
            <header>
                <EnterButton 
                    spatial={[3, 3, 14, 10]} 
                    width={width}
                    highlight={null}
                    colors={[
                        "hsl(15, 100%, 60%)",
                        "blue",
                        "hsl(15, 80%, 40%)",
                        "aqua",
                        "white",
                    ]}
                    focus={tabIndex === 1}
                    enterSelect={enter}
                    linkTo={"./home"}
                    triggerExit={triggerExit}
                >
                    ENTER
                </EnterButton>

                <H1 spatial={[0, 15, 20, 2]} width={width}>Rothko</H1>

                <Phrase
                    width={width}
                    spatial={[0, 18, 20, 7]}
                >
                    an<br/>
                    audio / visual<br/>
                    web design theme<br/>
                    by<br/>
                </Phrase> 

                <Logo src={logo} alt="logo of web design company Dreeko" 
                    spatial={[0, 26, 20, 2]}
                />
            </header>
        </LayerDiv>
    );
};

