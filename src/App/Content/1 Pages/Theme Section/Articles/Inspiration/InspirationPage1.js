// IMPORTS //////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../../../Page";
import InspirationPage1ArticleLayer from 
"../../../../2 Layers/Theme/Inspiration Page 1/InspirationPage1ArticleLayer";
import RothkoLayer3 from
"../../../../2 Layers/Theme/Inspiration Page 1/RothkoLayer3";

export default function InspirationPage1(props) {
    return (
        <Page maxFocusableElements={3}>
            <InspirationPage1ArticleLayer />
            <RothkoLayer3 />
        </Page>
    );
};