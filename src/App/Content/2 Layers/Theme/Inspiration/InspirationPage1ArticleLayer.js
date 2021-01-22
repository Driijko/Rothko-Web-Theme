// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import LayerDiv from "../../LayerDiv";
import NavBar from "../../../3 Elements/NavBar";
import StyledHeader from "../../../4 Styling/Headers/StyledHeader";
import StyledPhrase from "../../../4 Styling/Text/StyledPhrase";
import RothkoDiv2 from "../../../4 Styling/RothkoDivs/RothkoDiv2";

export default function InspirationPage1ArticleLayer({
    width, triggerExit, enterSelect, tabIndex
}) {
    // RENDER ////////////////////////////////////////////////////////////
    return (
        <LayerDiv>
            <NavBar
                spatial={[5, 27]}
                triggerExit={triggerExit}
                width={width}
                enterSelect={enterSelect}
                tabIndex={tabIndex}
                colors={[
                    "hsl(230, 100%, 70%)",
                    "hsl(230, 100%, 40%)",
                    "hsl(0, 100%, 50%)",
                    "hsl(0, 100%, 50%)",
                ]}
                linksTo={[
                    "/theme",
                    "/theme/inspiration/page2"
                ]}
            />
            <RothkoDiv2
                spatial={[3, 0, 14, 5]}
                width={width}
                color={"hsla(230, 100%, 40%, 1)"}
            />
            <StyledHeader
                spatial={[0, 2, 20, 2]}
                width={width}
                headerLevel={3}
                colors={[
                    "hsl(230, 100%, 0%)",
                    "hsl(230, 100%, 80%)",
                ]}
            >
                <h3>Inspiration</h3>
            </StyledHeader>
            <StyledPhrase
                spatial={[4, 6, 12, 8]}
                width={width}
                color={"hsla(220, 100%, 70%, 0.7)"}
            >
                <br/>
                ...<br/>
                Interpreting<br/><br/>
                Mark Rothko's work<br/><br/>
                as a blueprint<br/><br/>
                for web design<br/>
                ...
            </StyledPhrase>
        </LayerDiv>
    );
};