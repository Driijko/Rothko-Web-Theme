import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";
import direction from "./helpers/direction";

// function highlight(highlight, colors) {
//     if (highlight === null) {
//         return ``;
//     }
//     else if (highlight) {return css`
//         animation: ${direction(
//             `background-color: ${colors[1]};
//             border-color: ${colors[0]};`
//             ,
//             `background-color: ${colors[0]};
//             border-color: ${colors[1]};`
//         )} 0.5s ease-out forwards;
//     `}
//     else {return css`
//         animation: ${direction(
//             `background-color: ${colors[0]};
//             border-color: ${colors[1]};`
//             ,
//             `background-color: ${colors[1]};
//             border-color: ${colors[0]};`
//         )} 1s ease-in forwards;
//     `};
// };

function highlight(highlight, colors) {
    if (highlight === null) {
        return ``;
    }
    else if (highlight) {return css`
        animation: ${direction(
            `border-color: ${colors[2]}`
            ,
            `border-color: ${colors[0]}`
        )} 1s ease-out forwards;
    `}
    else {return css`
        animation: ${direction(
            `border-color: ${colors[0]}`
            ,
            `border-color: ${colors[2]}`
        )} 2s ease-out forwards;
    `};
};

const RothkoDiv = styled("div")`${({
    spatial, 
    width, 
    isHighlighted, 
    colors,
    borderSize,
})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    border: ${width/borderSize}px solid ${colors[2]};
    color: ${colors[0]};
    background-color: ${colors[1]};
    filter: blur(${width / 100}px);
    ${highlight(isHighlighted, colors)}
`}`;

export default RothkoDiv;

// ${highlight(isHighlighted, colors)}
