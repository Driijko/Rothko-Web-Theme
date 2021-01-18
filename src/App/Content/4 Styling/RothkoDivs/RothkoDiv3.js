import styled, {css, keyframes} from "styled-components";

import positioning from "../helpers/positioning";

// function animationSequence(colors, borderSize) {
    // return keyframes`
    //     0% {
    //         background-color: ${colors[0]};
    //         ${borderSize !== undefined ? `border-color: ${colors[1]};` : ``}
    //     }
    //     50% {
    //         background-color: ${colors[1]};
    //         ${borderSize !== undefined ? `border-color: ${colors[0]};` : ``}
    //     }
    //     100% {
    //         background-color: ${colors[0]};
    //         ${borderSize !== undefined ? `border-color: ${colors[1]};` : ``}
    //     }
    // `;
//     return keyframes`
//         0% {
//             background-color: red;
//         }
//         100% {
//             background-color: blue;
//         }
//     `;
// };

const frames = keyframes`
    0% {border-color: blue}
    100% {border-color: red}
`;

function animationSequence(borderSize, colors) {
    return keyframes`
        0% {background-color: ${colors[0]}; ${borderSize ? `border-color: ${colors[1]};`: ``}}
        50% {background-color: ${colors[1]}; ${borderSize ? `border-color: ${colors[0]};`: ``}}
        100% {background-color: ${colors[0]}; ${borderSize ? `border-color: ${colors[1]};`: ``}}
    `;
}

const RothkoDiv3 = styled("div")`${({
    spatial, width, animationLength, colors, borderSize
})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    border-width: ${width/borderSize}px;
    border-style: solid;
    filter: blur(${width / 100}px);
    animation: ${animationSequence(borderSize, colors)} ${animationLength}s linear infinite;
`}`;

export default RothkoDiv3;

// ${animationSequence(colors, borderSize)}
// ${animationLength}s
// linear
// infinite;

