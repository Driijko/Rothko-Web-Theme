import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";

const StyledImg = styled("img")`${({spatial})=>css`
    ${positioning(spatial)}
    object-fit: contain;
`}`;

export default StyledImg;