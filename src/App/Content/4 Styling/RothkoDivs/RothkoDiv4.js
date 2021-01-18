import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";
import direction from "../helpers/direction";

const RothkoDiv4 = styled("div")`${({spatial, width, colors, borderSize})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: ${colors[0]};
    ${borderSize ? `border: ${width/borderSize}px solid ${colors[1]};` : ``}
    filter: blur(${width / 100}px);
    animation: ${direction("opacity: 0", "opacity: 1")} 3s linear forwards;
`}`;

export default RothkoDiv4;