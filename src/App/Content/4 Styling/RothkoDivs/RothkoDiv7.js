import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

function transitions(interactivity, colors, width) {
    if (interactivity === "able") {
        return css`
            transition-duration: 3s;
            background-color: ${colors[0]};
            opacity: 0.3;
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
            opacity: 1;
            background-color: white;
        `;
    }
};

const RothkoDiv7 = styled("div")`${({spatial, width, colors, interactivity})=>css`
    ${positioning([
        spatial[0] - 2,
        spatial[1] - 10,
        spatial[2] + 4,
        spatial[3] + 10,
    ])}
    box-sizing: border-box;
    filter: blur(${width / 10}px);
    z-index: -1;
    ${transitions(interactivity, colors, width)}
`}`;

export default RothkoDiv7;