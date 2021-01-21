//IMPORTS //////////////////////////////////////////////////////////////
// Import components --------------------------------------------------
import LayerDiv from "../../LayerDiv";
import RothkoDiv6 from "../../../4 Styling/RothkoDivs/RothkoDiv6";
import RothkoDiv3 from "../../../4 Styling/RothkoDivs/RothkoDiv3";
import RothkoDiv2 from "../../../4 Styling/RothkoDivs/RothkoDiv2";

// COMPONENT ///////////////////////////////////////////////////////////
export default function RothkoLayer3({
    width
}) {
    // RENDER ////////////////////////////////////////////////////////
    return (
        <LayerDiv>
            <RothkoDiv2
                spatial={[0, 0, 20, 30]}
                width={width}
                color={"hsl(230, 100%, 50%)"}
            />
            <RothkoDiv6
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "hsl(0, 100%, 0%)",
                    "hsl(250, 100%, 50%)",
                    "hsl(0, 100%, 0%)",
                    "hsl(230, 100%, 40%)",
                ]}
                animationLength={20}
            />
            <RothkoDiv3
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "hsla(0, 0%, 0%, 0.5)",
                    "hsla(230, 100%, 50%, 0.1)",
                ]}
                animationLength={25}
                borderSize={5}
            />
        </LayerDiv>
    );
};