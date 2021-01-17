import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

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
    else if (interactivity === "selected") {
        return css`
            background-color: ${colors[4]};
            border-color: ${colors[3]};
            transition-duration: 0s;
        `;
    }
}

const RothkoDiv1 = styled("div")`${({
    spatial, 
    width, 
    interactivity, 
    colors,
    borderSize,
})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    border-width: ${width/borderSize}px;
    border-style: solid;
    background-color: ${colors[1]};
    filter: blur(${width / 100}px);
    ${transitions(interactivity, colors)}
`}`;

export default RothkoDiv1;