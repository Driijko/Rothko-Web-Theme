// IMPORTS ////////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import LayerDiv from "../LayerDiv";
import RothkoDiv3 from "../../4 Styling/RothkoDivs/RothkoDiv3";

export default function RothkoLayer1({width}) {
    return (
        <LayerDiv>
            <RothkoDiv3
                spatial={[0, 0, 20, 20]}
                width={width}
                colors={[
                    "hsl(10, 100%, 50%)",
                    "hsl(10, 50%, 70%)",
                ]}
                borderSize={20}
                animationLength={20}
            />
        </LayerDiv>
    );
};