import styled, {css} from "styled-components";

import positioning from "../helpers/positioning";

const StyledPhrase = styled("p")`${({spatial, width, color})=>css`
    ${positioning(spatial)}
    font-size: ${width / 20}px;
    font-family: Montserrat, sans-serif;
    text-align: center;
    color: ${color};
    line-height: ${width/12}px;
`}`;

export default StyledPhrase;