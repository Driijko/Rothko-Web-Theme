// IMPORTS //////////////////////////////////////////////////////////
// Import libraries ////////////////////////////////////////////////

import styled, {css} from "styled-components";

import Page from "./Page";
import MainMenu from "../2 Layers/Home/MainMenu";
import RothkoLayer1 from "../2 Layers/Home/RothkoLayer1";

export default function HomePage(props) {
    return (
        <Page
            maxFocusableElements={2}
        >
            <MainMenu />
            <RothkoLayer1 />
        </Page>
    );
};