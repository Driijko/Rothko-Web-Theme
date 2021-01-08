import styled from "styled-components";

import RothkoDiv1 from "../../4 Styling/RothkoDivs/RothkoDiv1";
import RothkoDiv2 from "../../4 Styling/RothkoDivs/RothkoDiv2";
import StyledH1 from "../../4 Styling/Headers/StyledH1";
import StyledPhrase from "../../4 Styling/Text/StyledPhrase";

import direction from "../../4 Styling/helpers/direction";

const LayerDiv = styled("div")`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: black;
`;

const H1 = styled(StyledH1)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 3s linear forwards;
`;

const Phrase = styled(StyledPhrase)`
    opacity: 0;
    animation: ${direction("opacity: 0", "opacity: 1")} 3s 3s linear forwards;
`;

export default function SpashIntro({width}) {

    return (
        <LayerDiv>
            <RothkoDiv2 spatial={[0, 0, 20, 19]} width={width} />
            <RothkoDiv1 spatial={[3, 3, 14, 10]} width={width} />
            
            <header>
                <H1 spatial={[0, 14, 20, 2]} width={width}>Rothko</H1>
                <Phrase
                    width={width}
                    spatial={[0, 17, 20, 10]}
                >
                    an<br/>
                    audio / visual<br/>
                    web design theme<br/>
                    by<br/>
                </Phrase>               
            </header>
        </LayerDiv>
    );
};