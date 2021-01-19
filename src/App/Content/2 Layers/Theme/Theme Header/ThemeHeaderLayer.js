// IMPORTS /////////////////////////////////////////////////////
// Import components ---------------------------------------------
import LayerDiv from "../../LayerDiv";
import StyledHeader from "../../../4 Styling/Headers/StyledHeader";
import NavLink from "../../../3 Elements/NavLink";
import HomeButton from "../../../3 Elements/HomeButton";
import RothkoDiv4 from "../../../4 Styling/RothkoDivs/RothkoDiv4";
import RothkoDiv2 from "../../../4 Styling/RothkoDivs/RothkoDiv2";
import RothkoDiv3 from "../../../4 Styling/RothkoDivs/RothkoDiv3";

// COMPONENT //////////////////////////////////////////////////////

export default function ThemeHeaderLayer({
    width, tabIndex, triggerExit, enterSelect
}) {
    // RENDER /////////////////////////////////////////////////////
    return (
        <LayerDiv>
            <RothkoDiv4
                spatial={[0, 0, 20, 30]}
                colors={["red"]}
                width={width}
            />
            <RothkoDiv3
                spatial={[1, 0, 18, 30]}
                width={width}
                colors={[
                    "red",
                    "magenta",
                ]}
                borderSize={30}
                animationLength={10}
            />
            <RothkoDiv2
                spatial={[2, 2, 16, 6]}
                width={width}
                color={"hsl(300, 100%, 50%)"}
            />
            <ul>
                <NavLink
                    spatial={[2, 8, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(300, 100%, 50%)",
                        "hsl(0, 100%, 100%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={100}
                    linkTo={"./theme/inspiration"}
                    triggerExit={triggerExit}
                    focus={tabIndex === 1}
                    enterSelect={enterSelect && tabIndex === 1}
                >
                    Inspiration
                </NavLink>
                <NavLink
                    spatial={[2, 12, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(300, 100%, 50%)",
                        "hsl(0, 100%, 100%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={100}
                    focus={tabIndex === 2}
                    triggerExit={triggerExit}
                    enterSelect={enterSelect && tabIndex === 2}
                    linkTo={"./theme/design-philosophy"}
                >
                    Design Philosophy
                </NavLink>
                <NavLink
                    spatial={[2, 16, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(300, 100%, 50%)",
                        "hsl(0, 100%, 100%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={100}
                    focus={tabIndex === 3}
                    triggerExit={triggerExit}
                    enterSelect={enterSelect && tabIndex === 3}
                    linkTo={"./theme/tech"}
                >
                    Tech
                </NavLink>
                <NavLink
                    spatial={[2, 20, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "magenta",
                        "hsl(0, 100%, 100%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={100}
                    focus={tabIndex === 4}
                    triggerExit={triggerExit}
                    enterSelect={enterSelect && tabIndex === 4}
                    linkTo={"./theme/css"}
                >
                    CSS
                </NavLink>
                <NavLink
                    spatial={[2, 24, 16, 3]}
                    width={width}
                    colors={[
                        "aqua",
                        "hsl(300, 100%, 50%)",
                        "hsl(0, 100%, 100%)",
                        "blue",
                        "magenta",
                    ]}
                    fontSize={13}
                    borderSize={100}
                    focus={tabIndex === 5}
                    triggerExit={triggerExit}
                    enterSelect={enterSelect && tabIndex === 5}
                    linkTo={"./theme/audio"}
                >
                    Audio
                </NavLink>
            </ul>
            <StyledHeader
                spatial={[2, 1, 16, 2]}
                width={width}
                headerLevel={2}
                colors={[
                    "hsl(300, 100%, 30%)", 
                    "hsl(300, 100%, 90%)", 
                ]}
            >
                <h2>
                    The Rothko<br/>
                    Web Design Theme
                </h2>
            </StyledHeader>
            <HomeButton
                spatial={[8, 28, 4, 1]}
                width={width}
                colors={[
                    "aqua",
                    "hsl(300, 100%, 50%)",
                    "hsl(0, 100%, 100%)",
                    "white",
                    "white",
                ]}
                borderSize={200}
                fontSize={20}
                triggerExit={triggerExit}
                focus={tabIndex === 6}
                enterSelect={enterSelect && tabIndex=== 6}
                linkTo={"./home"}
            >
                HOME
            </HomeButton>
        </LayerDiv>
    );
};