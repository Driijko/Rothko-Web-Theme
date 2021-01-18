import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

function transitions(interactivity, colors, width) {
    if (interactivity === "able") {
        return css`
            transition-duration: 3s;
            background-color: ${colors[0]};
            opacity: 0.5;
        `;
    }
    else if (interactivity === "highlight") {
        return css`
            transition-duration: 3s;
            background-color: ${colors[1]};
            opacity: 0.7;
        `;
    }
    else if (interactivity === "selected") {
        return css`
            transition-duration: 0s;
        `;
    }
};

const RothkoDiv5 = styled("div")`${({spatial, width, colors, interactivity})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    filter: blur(${width / 10}px);
    ${transitions(interactivity, colors, width)}
`}`;

export default RothkoDiv5;