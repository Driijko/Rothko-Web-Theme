// IMPORTS /////////////////////////////////////////////////////
// Import libraries -------------------------------------------
import styled, {css} from "styled-components";

// Import helpers --------------------------------------------
import positioning from "../helpers/positioning";

// COMPONENT //////////////////////////////////////////////////
const StyledHeader = styled("div")`${({
    headerLevel, width, spatial, colors
})=>css`
    ${positioning(spatial)}
    font-family: Montserrat Subrayada, sans-serif;
    text-align: center;
    font-size: ${width/(headerLevel * 6)}px;
    color: ${colors[0]};
    text-shadow: 0 0 ${width/50}px ${colors[1]};
`}`;

export default StyledHeader;