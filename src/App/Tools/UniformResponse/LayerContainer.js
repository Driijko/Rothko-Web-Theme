import styled, {css} from "styled-components";

const LayerContainer = styled.div`${props => css`
    position: relative;
    width: ${props.width}px;
    height: ${props.height}px;
`}`;

export default LayerContainer;