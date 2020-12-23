import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const RothkoDiv1 = styled("div")`${({spatial, width})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: blue;
    border: ${width / 50}px solid red;
    filter: blur(${width / 100}px);
`}`;

export default RothkoDiv1;