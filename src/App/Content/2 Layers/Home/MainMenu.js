// IMPORTS //////////////////////////////////////////////////////////

// Import components ---------------------------------------------
import LayerDiv from "../LayerDiv";
import NavLink from "../../3 Elements/NavLink";
import RothkoDiv3 from "../../4 Styling/RothkoDivs/RothkoDiv3";
import RothkoDiv4 from "../../4 Styling/RothkoDivs/RothkoDiv4";

export default function MainMenu({width}) {
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
                    "hsl(220, 100%, 70%)",
                    "hsl(0, 100%, 0%)",
                    "hsl(220, 80%, 50%)",
                    "green",
                    "white",
                ]}
                fontSize={13}
                borderSize={20}
            >
                Mark Rothko:<br/>
                a portrait
            </NavLink>
            <NavLink
                spatial={[3, 16, 14, 9]}
                width={width}
                colors={[
                    "hsl(220, 100%, 70%)",
                    "hsl(0, 0%, 0%)",
                    "hsl(220, 80%, 50%)",
                    "green",
                    "white",
                    "hsl(220, 100%, 50%)",
                ]}
                fontSize={14}
                borderSize={20}
            >
                Explore the<br/>
                Rothko theme
            </NavLink>
        </LayerDiv>
    );
};