import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const StyledH1 = styled("h1")`${({spatial, width})=>css`
    ${positioning(spatial)}
    font-size: ${width / 10}px;
    font-family: Montserrat Subrayada, sans-serif;
    text-align: center;
`}`;

export default StyledH1;