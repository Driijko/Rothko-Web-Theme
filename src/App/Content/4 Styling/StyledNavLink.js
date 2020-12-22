import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";
import direction from "./helpers/direction"

// HIGHLIGHT ///////////////////////////////////////////////////////

const highlighted = `
    color: white;
    background-color: magenta;
    border: 3px solid white;
`;

const notHighlighted = ``;

function highlight(highlight) {
    if (highlight === null) {
        return ``;
    }
    else if (highlight) {return css`
        animation: ${direction(notHighlighted, highlighted)} 1.5s ease-out forwards;
    `}
    else {return css`
        animation: ${direction(highlighted, notHighlighted)} 1s ease-out forwards;
    `};
};

const StyledNavLink = styled.a`${props=>css`
    ${positioning(props.spatial)}
    font-size: ${props.width / 8}px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    border: 3px solid rgba(0, 0, 0, 0);
    color: darkOrange;
    ${highlight(props.highlight)}
`}`;

export default StyledNavLink;