import {keyframes} from "styled-components";

export default function direction(from, to) {
    return keyframes`
        from {${from}}
        to {${to}}
    `;
};