import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";
import direction from "./helpers/direction"

// HIGHLIGHT ///////////////////////////////////////////////////////

function highlight(isHighlighted, width, colors) {
    if (isHighlighted === null) {
        return ``;
    }
    else if (isHighlighted) {return css`
        animation: ${direction(
            `filter: blur(${width/300}px);
            color: ${colors[2]};`
            ,
            `filter: blur(${width/ 1000}px);
            color: ${colors[0]};`
        )} 1s ease-out forwards;
    `}
    else {return css`
        animation: ${direction(
            `filter: blur(${width/1000}px);
            color: ${colors[0]};`
            ,
            `filter: blur(${width/300}px);
            color: ${colors[2]};`
        )} 2s ease-out forwards;
    `};
};

const StyledNavLink = styled("a")`${({spatial, width, isHighlighted, colors})=>css`
    ${positioning(spatial)}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${width / 10}px;
    filter: blur(${width / 300}px);
    color: ${colors[2]};
    cursor: pointer;
    ${highlight(isHighlighted, width, colors)}
`}`;

export default StyledNavLink;

// ${highlight(isHighlighted, colors)}
