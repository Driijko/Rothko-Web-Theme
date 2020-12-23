import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

import {color1} from "../../../settings";

const StyledH1 = styled("h1")`${({spatial, width})=>css`
    ${positioning(spatial)}
    font-size: ${width / 12}px;
    font-family: Montserrat Subrayada, sans-serif;
    text-align: center;
    color: ${color1};
`}`;

export default StyledH1;