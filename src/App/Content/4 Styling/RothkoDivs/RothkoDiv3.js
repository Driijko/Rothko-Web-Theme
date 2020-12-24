import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const RothkoDiv1 = styled("div")`${({spatial, width})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: white;
    filter: blur(${width / 70}px);
`}`;

export default RothkoDiv1;

// background-color: rgb(41, 27, 27);
// background-color: hsl(30, 100%, 30%);

