import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const RothkoDiv1 = styled("div")`${({spatial, width})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: hsl(30, 100%, 30%);
    filter: blur(${width / 10}px);
`}`;

export default RothkoDiv1;

// background-color: rgb(41, 27, 27);
