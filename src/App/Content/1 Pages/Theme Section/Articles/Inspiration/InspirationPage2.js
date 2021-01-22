// IMPORTS //////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../../../Page";
import InspirationPage1ArticleLayer from 
"../../../../2 Layers/Theme/Inspiration/InspirationPage1ArticleLayer";
import RothkoLayer3 from
"../../../../2 Layers/Theme/Inspiration/RothkoLayer3";

export default function InspirationPage2(props) {
    return (
        <Page maxFocusableElements={3}>
            <InspirationPage1ArticleLayer />
            <RothkoLayer3 />
        </Page>
    );
};