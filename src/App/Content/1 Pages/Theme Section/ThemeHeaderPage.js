// IMPORTS //////////////////////////////////////////////////////////////
// Import components -----------------------------------------------------
import Page from "../Page";
import ThemeHeaderLayer from "../../2 Layers/Theme/Theme Header/ThemeHeaderLayer";
import RothkoLayer2 from "../../2 Layers/Theme/Theme Header/RothkoLayer2";

// COMPONENT ////////////////////////////////////////////////////////////
export default function ThemeHeaderPage(props) {
    // RENDER //////////////////////////////////////////////////////////
    return (
        <Page maxFocusableElements={6}>
            <ThemeHeaderLayer />
            <RothkoLayer2 />
        </Page>
    );
};