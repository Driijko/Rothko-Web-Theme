// IMPORTS //////////////////////////////////////////////////////////
// Import components ---------------------------------------------
import LayerDiv from "../LayerDiv";
import NavLink from "../../3 Elements/NavLink";
import RothkoDiv3 from "../../4 Styling/RothkoDivs/RothkoDiv3";
import RothkoDiv4 from "../../4 Styling/RothkoDivs/RothkoDiv4";

export default function MainMenu({
    width, triggerExit, tabIndex, enterSelect
}) {
    return (
        <LayerDiv>
            <RothkoDiv4
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "black",
                    "red",
                ]}
                borderSize={100}
            />
            <RothkoDiv3
                spatial={[5, 2, 10, 26]}
                width={width}
                colors={[
                    "hsl(0, 100%, 0%)",
                    "hsl(0, 100%, 50%)",
                ]}
                animationLength={10}
            />
            <NavLink
                spatial={[3, 5, 14, 9]}
                width={width}
                colors={[
                    "hsl(220, 100%, 80%)",
                    "hsl(0, 100%, 0%)",
                    "hsl(220, 80%, 50%)",
                    "black",
                    "black",
                ]}
                fontSize={13}
                borderSize={20}
                focus={tabIndex === 1}
                triggerExit={triggerExit}
                enterSelect={enterSelect && tabIndex === 1}
            >
                Mark Rothko:<br/>
                a portrait
            </NavLink>
            <NavLink
                spatial={[3, 16, 14, 9]}
                width={width}
                colors={[
                    "hsl(220, 100%, 80%)",
                    "hsl(0, 0%, 0%)",
                    "hsl(220, 80%, 50%)",
                    "white",
                    "white",
                ]}
                fontSize={14}
                borderSize={20}
                linkTo={"./theme"}
                triggerExit={triggerExit}
                focus={tabIndex === 2}
                enterSelect={enterSelect && tabIndex === 2}
            >
                Explore the<br/>
                Rothko theme
            </NavLink>
        </LayerDiv>
    );
};