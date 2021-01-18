// IMPORTS ////////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import LayerDiv from "../LayerDiv";
import RothkoDiv3 from "../../4 Styling/RothkoDivs/RothkoDiv3";

export default function RothkoLayer1({width}) {
    return (
        <LayerDiv>
            <RothkoDiv3
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "hsl(0, 100%, 0%)",
                    "hsl(0, 100%, 50%)",
                ]}
                animationLength={30}
                borderSize={20}
            />
            <RothkoDiv3
                spatial={[3, 2, 14, 14]}
                width={width}
                colors={[
                    "hsl(0, 100%, 0%)",
                    "hsl(0, 100%, 30%)",
                ]}
                borderSize={30}
                animationLength={45}
            />
            <RothkoDiv3 
                spatial={[4, 17, 12, 11]}
                width={width}
                colors={[
                    "hsl(0, 100%, 0%)",
                    "hsl(0, 100%, 30%)",
                ]}
                borderSize={30}
                animationLength={45}
            />
        </LayerDiv>
    );
};