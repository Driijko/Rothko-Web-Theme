import styled, {css} from "styled-components";

import direction from "../4 Styling/helpers/direction";

function positioning(spatial) {
    return `
        position: absolute;
        left: ${spatial[0]}px;
        top: ${spatial[1]}px;
        width: ${spatial[2]}px;
        height: ${spatial[3]}px;
    `;
};

const WindowDiv = styled("div")`
    position: absolute;
    left: 0px;
    top: 0px;
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    animation: ${direction("opacity: 0;", "opacity: 1;")} 3s linear forwards;
    background-image: radial-gradient(
        ellipse 50% 100%,
        black 70%, 
        rgb(40, 40, 40)
    );
`;

const GutterDiv = styled("div")`${({spatial})=>css`
    box-sizing: border-box;
    ${positioning(spatial)}
`}`;

export default function Gutter({type, middle, side}) {

    if (type === "horizontal") {
        return (
            <WindowDiv>
                <GutterDiv spatial={[0, 0, window.innerWidth, side]} />
                {middle > 0 ?
                    <GutterDiv spatial={[
                        0,
                        (window.innerHeight / 2) - (middle / 2),
                        window.innerWidth,
                        middle,
                    ]} />
                    : null
                }
                <GutterDiv spatial={[
                    0, 
                    window.innerHeight - side, 
                    window.innerWidth,
                    side
                ]} />
            </WindowDiv>
        );
    }
    else if (type === "vertical") {
        return (
            <WindowDiv>
                <GutterDiv spatial={[0, 0, side, window.innerHeight]} />
                {middle > 0 ?
                    <GutterDiv spatial={[
                        (window.innerWidth / 2) - (middle / 2),
                        0,
                        middle,
                        window.innerHeight,
                    ]} />
                    : null
                }
                <GutterDiv spatial={[
                    window.innerWidth - side,
                    0,
                    side,
                    window.innerHeight
                ]} />
            </WindowDiv>
        );
    }
    else {
        return <div></div>
    }
}; 