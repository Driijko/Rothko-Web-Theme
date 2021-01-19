// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import helpers ------------------------------------------------
import positioning from "../helpers/positioning";
import direction from "../helpers/direction";

// ANIMATION ////////////////////////////////////////////////////////


// COMPONENT //////////////////////////////////////////////////////////
const RothkoDiv6Top = styled("div")`${({
    width, colors, spatial, animationLength
})=>css`
    ${positioning(spatial)}
    animation: 
        ${keyframes`
            0% {opacity: 0;}
            50% {opacity: 1;}
            100% {opacity: 0;}
        `} 
        ${animationLength}s linear infinite;
    background: linear-gradient(
        ${colors[0]}, ${colors[1]}
    );
`}`;

const RothkoDiv6Bottom = styled("div")`${({
    width, colors, spatial, animationLength
})=>css`
    ${positioning(spatial)}
    animation: 
        ${keyframes`
            0% {opacity: 1;}
            50% {opacity: 0;}
            100% {opacity: 1;}
        `} 
        ${animationLength}s linear infinite;
    background: linear-gradient(
        ${colors[1]}, ${colors[0]}
    );  
`}`;


export default function RothkoDiv6({
    width, spatial, colors, animationLength
}) {
    return (
        <div>
            <RothkoDiv6Bottom
                spatial={spatial}
                width={width}
                colors={[colors[0], colors[1]]}
                animationLength={animationLength}
            />
            <RothkoDiv6Top
                spatial={spatial}
                width={width}
                colors={[colors[2], colors[3]]}
                animationLength={animationLength}
            />
        </div>
    );
};