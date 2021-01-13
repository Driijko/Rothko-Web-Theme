import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

import {color2} from "../../../settings";

const StyledPhrase = styled("p")`${({spatial, width})=>css`
    ${positioning(spatial)}
    font-size: ${width / 20}px;
    font-family: Montserrat, sans-serif;
    text-align: center;
    line-height: ${width/12}px;
`}`;

export default StyledPhrase;