import styled, {css} from "styled-components";

function gridDivisions(num) {
    let result = "";
    for (let i = 0 ; i < num ; i++) {
        result += "1fr ";
    }
    return result;
}

const ContainerGrid = styled.div`${props=>css`
    display: grid;
    grid-template-rows: ${gridDivisions(props.rowNum)};
    grid-template-columns: ${gridDivisions(props.colNum)};
    gap: ${props.gap}px;
`}`;

export default ContainerGrid;