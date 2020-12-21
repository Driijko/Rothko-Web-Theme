import {createContext, useState} from "react";

import UniformDesign from "../../Tools/UniformResponse/UniformResponse";

const PageContext = createContext();

export default function HomePage(props) {

    // PHASE /////////////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("enter");

    return (
        <div>{phase}</div>
    )
}