import styled, {css} from "styled-components";

const LayerDiv = styled("div")`${props=>css`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: aqua;
`}`;

export default function Layer1(props) {
    return (
        <LayerDiv>
            <h1>Layer 2</h1>
        </LayerDiv>
    );
};