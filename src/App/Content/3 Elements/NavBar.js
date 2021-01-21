// IMPORTS /////////////////////////////////////////////////////////////////
// Import components ------------------------------------------------------
import NavBarLink from "./NavBarLink";

// COMPONENT /////////////////////////////////////////////////////////////
export default function NavBar({
    width, triggerExit, linksTo, spatial, colors, enterSelect, tabIndex
}) {
    // RENDER /////////////////////////////////////////////////////////
    return (
        <div>
            <NavBarLink
                spatial={[spatial[0], spatial[1], 3, 2]}
                colors={colors}
                width={width}
                fontSize={10}
                linkTo={linksTo[0]}
                triggerExit={triggerExit}
                focus={tabIndex === 1}
                enterSelect={enterSelect && tabIndex === 1}
            >
                {"<"}
            </NavBarLink>
            <NavBarLink
                spatial={[spatial[0] + 3, spatial[1], 4, 2]}
                colors={colors}
                width={width}
                fontSize={20}
                linkTo={"/home"}
                triggerExit={triggerExit}
                enterSelect={enterSelect && tabIndex === 2}
                focus={tabIndex === 2}
            >
                HOME
            </NavBarLink>
            <NavBarLink
                spatial={[spatial[0] + 7, spatial[1], 3, 2]}
                colors={colors}
                width={width}
                fontSize={10}
                linkTo={linksTo[1]}
                triggerExit={triggerExit}
                enterSelect={enterSelect && tabIndex === 3}
                focus={tabIndex === 3}
            >
                {">"}
            </NavBarLink>
        </div>
    );
};