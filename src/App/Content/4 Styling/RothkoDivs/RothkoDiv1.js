import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";
import direction from "../helpers/direction";

const RothkoDiv1 = styled("div")`${({spatial, width})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: blue;
    border: ${width / 50}px solid red;
    filter: blur(${width / 100}px);
    animation: ${direction("opacity: 0", "opacity: 1")} 3s linear forwards;
`}`;

export default RothkoDiv1;