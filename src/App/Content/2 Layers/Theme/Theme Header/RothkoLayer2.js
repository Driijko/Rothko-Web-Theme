// IMPORTS /////////////////////////////////////////////////////////////
// Import components -------------------------------------------------
import LayerDiv from "../../LayerDiv";
import RothkoDiv2 from "../../../4 Styling/RothkoDivs/RothkoDiv2";
import RothkoDiv4 from "../../../4 Styling/RothkoDivs/RothkoDiv4";
import RothkoDiv6 from "../../../4 Styling/RothkoDivs/RothkoDiv6";

// COMPONENT ///////////////////////////////////////////////////////
export default function RothkoLayer2({width}) {
    // RENDER /////////////////////////////////////////////////////////
    return (
        <LayerDiv>
            <RothkoDiv6
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "yellow",
                    "white",
                    "orange",
                    "red",
                ]}
                animationLength={20}
            />
            <RothkoDiv4
                spatial={[0, 0, 20, 30]}
                width={width}
                colors={[
                    "hsla(0, 0%, 0%, 0)",
                    "hsla(0, 100%, 100%, 0.3)",
                ]}
                borderSize={10}
            />
            <RothkoDiv4
                spatial={[2, 22, 16, 1]}
                width={width}
                colors={["hsla(200, 100%, 50%, 0.5)"]}
            />
            <RothkoDiv2
                spatial={[0, 20, 20, 10]}
                width={width}
                color={"hsla(300, 100%, 50%, 0.5)"}
            />
            <RothkoDiv4
                spatial={[3, 5, 14, 10]}
                width={width}
                colors={["hsla(0, 100%, 100%, 0.3)"]}
            />
            <RothkoDiv4
                spatial={[2, 26, 16, 1]}
                width={width}
                colors={["hsla(300, 100%, 50%, 0.7)"]}
            />
        </LayerDiv>
    );
};
