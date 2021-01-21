// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import LayerDiv from "../../LayerDiv";
import NavBar from "../../../3 Elements/NavBar";

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
                    "hsl(150, 100%, 50%)",
                    "hsl(0, 100%, 50%)",
                ]}
                linksTo={[
                    "/theme",
                    "/theme/inspiration/page2"
                ]}
            />
        </LayerDiv>
    );
};