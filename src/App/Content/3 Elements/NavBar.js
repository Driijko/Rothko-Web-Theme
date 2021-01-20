// IMPORTS /////////////////////////////////////////////////////////////////
// Import components ------------------------------------------------------
import NavBarLink from "./NavBarLink";

// COMPONENT /////////////////////////////////////////////////////////////
export default function NavBar({
    width, triggerExit, linksTo, spatial, colors
}) {
    // RENDER /////////////////////////////////////////////////////////
    return (
        <div>
            <NavBarLink
                spatial={[spatial[0], spatial[1], 3, 2]}
                colors={colors}
                width={width}
            >
                {"<"}
            </NavBarLink>
            <NavBarLink
                spatial={[spatial[0] + 3, spatial[1], 4, 2]}
                colors={colors}
                width={width}
            >
                HOME
            </NavBarLink>
            <NavBarLink
                spatial={[spatial[0] + 7, spatial[1], 3, 2]}
                colors={colors}
                width={width}
            >
                {">"}
            </NavBarLink>
        </div>
    );
};