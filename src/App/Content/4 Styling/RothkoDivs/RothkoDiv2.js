import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";
import direction from "../helpers/direction";

const RothkoDiv1 = styled("div")`${({spatial, width, color})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: ${color};
    filter: blur(${width / 10}px);
    animation: ${direction("opacity: 0", "opacity: 1")} 3s linear forwards;
`}`;

export default RothkoDiv1;