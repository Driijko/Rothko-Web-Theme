import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";

function transitions(interactivity, colors) {
    if (interactivity === "able") {
        return css`
            border-color: ${colors[2]};
            transition-duration: 2s;
        `;
    }
    else if (interactivity === "highlight") {
        return css`
            border-color: ${colors[0]};
            transition-duration: 1s;
        `;
    }
}

const RothkoDiv = styled("div")`${({
    spatial, 
    width, 
    interactivity, 
    colors,
    borderSize,
})=>css`
    ${positioning(spatial)}
    ${transitions(interactivity, colors)}
    box-sizing: border-box;
    border-width: ${width/borderSize}px;
    border-style: solid;
    background-color: ${colors[1]};
    filter: blur(${width / 100}px);
`}`;

export default RothkoDiv;