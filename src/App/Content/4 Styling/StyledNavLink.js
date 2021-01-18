import styled, {keyframes, css} from "styled-components";

import positioning from "./helpers/positioning";

// HIGHLIGHT ///////////////////////////////////////////////////////

function transitions(interactivity, colors, width) {
    if (interactivity === "able") {
        return css`
            transition-duration: 2s;
            filter: blur(${width/400}px);
            color: ${colors[2]};
        `;
    }
    else if (interactivity === "highlight") {
        return css`
            transition-duration: 1s;
            filter: blur(${width/700}px);
            color: ${colors[0]};
        `;
    }
    else if (interactivity === "selected") {
        return css`
            transition-duration: 0s;
            filter: blur(${width/700}px);
            color: ${colors[4]};
        `;
    };
};

const StyledNavLink = styled("a")`${({
        spatial, width, interactivity, colors, fontSize
    })=>css`
        ${positioning(spatial)}
        ${transitions(interactivity, colors, width)}
        transition-timing-function: ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: Montserrat, sans-serif;
        font-size: ${width / fontSize}px;
        cursor: pointer;
`}`;

export default StyledNavLink;