import styled from "styled-components";

const LayerDiv = styled("div")`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: black;
    border: 5px solid red;
    z-index: 10;
`;

export default LayerDiv;