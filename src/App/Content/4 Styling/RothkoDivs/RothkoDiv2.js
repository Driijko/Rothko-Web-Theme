import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const RothkoDiv1 = styled("div")`${({spatial, width})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    background-color: rgb(41, 27, 27);
    filter: blur(${width / 50}px);
`}`;

export default RothkoDiv1;