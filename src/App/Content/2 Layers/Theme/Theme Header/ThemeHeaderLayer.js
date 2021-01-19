// IMPORTS /////////////////////////////////////////////////////
// Import components ---------------------------------------------
import LayerDiv from "../../LayerDiv";
import StyledHeader from "../../../4 Styling/Headers/StyledHeader";
import NavLink from "../../../3 Elements/NavLink";
import RothkoDiv4 from "../../../4 Styling/RothkoDivs/RothkoDiv4";
import RothkoDiv2 from "../../../4 Styling/RothkoDivs/RothkoDiv2";
import RothkoDiv3 from "../../../4 Styling/RothkoDivs/RothkoDiv3";

// COMPONENT //////////////////////////////////////////////////////

export default function ThemeHeaderLayer({width}) {
    // RENDER /////////////////////////////////////////////////////
    return (
        <LayerDiv>
            <RothkoDiv4
                spatial={[0, 0, 20, 30]}
                colors={[
                    "red",
                    "red",
                ]}
                width={width}
                borderSize={40}
            />
            <RothkoDiv3
                spatial={[1, 0, 18, 30]}
                width={width}
                colors={[
                    "white",
                    "magenta",
                ]}
                borderSize={30}
                animationLength={5}
            />
            <RothkoDiv2
                spatial={[1, 0, 18, 9]}
                width={width}
                color={"hsl(300, 100%, 50%)"}
            />
            <StyledHeader
                spatial={[2, 2, 16, 2]}
                width={width}
                headerLevel={2}
                colors={[
                    "hsl(300, 100%, 40%)", 
                    "hsl(300, 100%, 90%)", 
                ]}
            >
                <h2>
                    The Rothko<br/>
                    Web Design Theme
                </h2>
            </StyledHeader>
            <ul>
                <NavLink
                    spatial={[2, 9, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(30, 100%, 50%)",
                        "hsl(300, 100%, 50%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={25}
                >
                    Inspiration
                </NavLink>
                <NavLink
                    spatial={[2, 13, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "red",
                        "hsl(30, 100%, 50%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={25}

                >
                    Design Philosophy
                </NavLink>
                <NavLink
                    spatial={[2, 17, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(30, 100%, 50%)",
                        "hsl(300, 100%, 50%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={25}
                >
                    Tech
                </NavLink>
                <NavLink
                    spatial={[2, 21, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "red",
                        "hsl(30, 100%, 50%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={25}
                >
                    CSS
                </NavLink>
                <NavLink
                    spatial={[2, 25, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(30, 100%, 50%)",
                        "hsl(300, 100%, 50%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={25}
                >
                    Audio
                </NavLink>
            </ul>
        </LayerDiv>
    );
};