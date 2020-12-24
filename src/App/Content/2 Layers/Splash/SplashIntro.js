import styled from "styled-components";

import RothkoDiv1 from "../../4 Styling/RothkoDivs/RothkoDiv1";
import RothkoDiv2 from "../../4 Styling/RothkoDivs/RothkoDiv2";
import RothkoDiv3 from "../../4 Styling/RothkoDivs/RothkoDiv3";
import StyledH1 from "../../4 Styling/Headers/StyledH1";
import StyledPhrase from "../../4 Styling/Text/StyledPhrase";

const LayerDiv = styled("div")`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: black;
`;

export default function SpashIntro({width}) {

    return (
        <LayerDiv>
            <RothkoDiv2 spatial={[0, 0, 20, 19]} width={width} />
            <RothkoDiv3 spatial={[5, 27, 10, 1]} width={width} />
            <RothkoDiv1 spatial={[3, 3, 14, 10]} width={width} />
            
            <header>
                <StyledH1 spatial={[0, 14, 20, 2]} width={width}>Rothko</StyledH1>
                <StyledPhrase
                    width={width}
                    spatial={[0, 17, 20, 10]}
                >
                    an<br/>
                    audio / visual<br/>
                    web design theme<br/>
                    by<br/>
                    dreeko
                </StyledPhrase>
            </header>
        </LayerDiv>
    );
};