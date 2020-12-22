import styled from "styled-components";

import NavLink from "../3 Elements/NavLink";

import StyledImg from "../4 Styling/StyledImg";
import img from "../5 Assets/visual/images/image.jpg";

const LayerDiv = styled("div")`
    position: absolute;
    box-sizing: border-box;
    border: 5px solid black;
    width: 100%;
    height: 100%;
    background-color: red;
`;

export default function Layer1({width, triggerExit, tabIndex, enter}) {
    return (
        <LayerDiv>
            {/* <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                spatial={[0, 5, 20, 3]}
                                width={width}
                                focus={tabIndex === 1}
                                enterSelect={tabIndex === 1 && enter}
                                linkTo={"./page1"}
                                triggerExit={triggerExit}
                            >
                                NavLink1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                spatial={[0, 9, 20, 3]}
                                width={width}
                                focus={tabIndex === 2}
                                enterSelect={tabIndex === 2 && enter}
                                linkTo={"./page1"}
                                triggerExit={triggerExit}
                            >
                                NavLink2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                spatial={[0, 13, 20, 3]}
                                width={width}
                                focus={tabIndex === 3}
                                enterSelect={tabIndex === 3 && enter}
                                linkTo={"./page1"}
                                triggerExit={triggerExit}
                            >
                                NavLink3
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <StyledImg
                    spatial={[0, 17, 20, 12]}
                    src={img}
                    alt="Mondrian painting" 
                />
            </main> */}
        </LayerDiv>
    );
};