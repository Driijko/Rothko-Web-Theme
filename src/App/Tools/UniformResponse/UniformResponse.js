// IMPORTS ////////////////////////////////////////////////////////////////
// Import Libraries -----------------------------------------------------------
import {Children, cloneElement, useState} from "react";
import styled from "styled-components";

// Import Components ----------------------------------------------------------
import ContainerGrid from "./ContainerGrid";
import LayerContainer from "./LayerContainer";
import WindowResize from "../WindowResize";

// Import Settings -----------------------------------------------------------
import {ratioWidth, ratioHeight, ratio, gapRatio} from "../../settings";

// STYLE ///////////////////////////////////////////////////////////////////////
const UniformResponseDiv = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
`;

// COMPONENT //////////////////////////////////////////////////////////////////////
export default function UniformResponse({children}) {

    // STATE ///////////////////////////////////////////////////////////////////////

    // Layer Containers ------------------------------------------------------
    const [layerContainerSize] = useState(calcLayerContainerSize());

    // Container Grid --------------------------------------------------------
    const [grid] = useState(calcGrid(Children.count(children), {...layerContainerSize}));

    // EVENT HANDLERS //////////////////////////////////////////////////////////

    // Refreshes the page after (delay) milliseconds 
    // (see settings file in App folder for delay).
    WindowResize();

    // CHILDREN PROPS ////////////////////////////////////////////////////////////////
    // Here we add props to the child elements, aka uniform layers
    const layers = Children.map(children, (child, index) => {
        if (index === 0 || index === 2) {
            return cloneElement(child, {
                width: layerContainerSize.width,
                height: layerContainerSize.height,
            });
        }
        else {
            return cloneElement(child, {
                type: grid.gutters.type,
                middle: grid.gap,
                side: grid.gutters.side,
            });
        };
    });

    // RENDER //////////////////////////////////////////////////////////////////
    return (
        <UniformResponseDiv>
            {layers[1]}
            <ContainerGrid
                colNum={grid.colNum}
                rowNum={grid.rowNum}
                gap={grid.gap}
            >
                <LayerContainer
                    width={layerContainerSize.width}
                    height={layerContainerSize.height}
                >
                    {layers[0]}
                </LayerContainer>
                {
                    grid.colNum === 2 || grid.rowNum === 2 ?
                    <LayerContainer
                        width={layerContainerSize.width}
                        height={layerContainerSize.height}
                    >
                        {layers[2]}
                    </LayerContainer>
                    : null
                }
            </ContainerGrid>
        </UniformResponseDiv>
    );
};

// HELPER FUNCTIONS //////////////////////////////////////////////////////////////

function calcLayerContainerSize() {
    const layerContainer = {
        width: null,
        height: null,
    };

    if (ratio <= 1) {
        layerContainer.width = Math.min(
            window.innerWidth,
            window.innerHeight * (ratioWidth / ratioHeight)
        );
        layerContainer.height = layerContainer.width * (ratioHeight / ratioWidth);
        return layerContainer;
    }
    else {
        layerContainer.height = Math.min(
            window.innerHeight,
            window.innerWidth * (ratioHeight / ratioWidth)
        );
        layerContainer.width = layerContainer.height * (ratioWidth / ratioHeight);
        return layerContainer;
    };
};

function calcGrid(layerNum, layerContainerSize) {

    const grid = {
        colNum: 1,
        rowNum: 1,
        gap: 0,
        gutters: {
            type: null,
            side: 0,
        },
    };

    // If UniformResponse only receives 2 children, it defaults to assuming
    // that a secondary container is not desired.
    const isTwoContainers = layerNum === 3;

    if (ratio <= 1) {

        const dualWidth = layerContainerSize.width * 2;
        const remainingWidth = window.innerWidth - dualWidth;

        if (isTwoContainers && window.innerWidth > dualWidth) {
            grid.colNum = 2;
            grid.gutters.type = "vertical";
            if (gapRatio > 1) {
                grid.gap = remainingWidth / gapRatio;
                grid.gutters.side = (remainingWidth - grid.gap) / 2;
            }
            else {
                grid.gap = remainingWidth;
            };
        }
        else {
            if (layerContainerSize.width === window.innerWidth) {
                grid.gutters.type = "horizontal";
                grid.gutters.side = (window.innerHeight - layerContainerSize.height) / 2;
            }
            else {
                grid.gutters.type = "vertical";
                grid.gutters.side = (window.innerWidth - layerContainerSize.width) / 2;
            }
        };
    }
    else {

        const dualHeight = layerContainerSize.height * 2;
        const remainingHeight = window.innerHeight - dualHeight;

        if (isTwoContainers && window.innerHeight > dualHeight) {
            grid.rowNum = 2;
            grid.gutters.type = "horizontal";
            if (gapRatio > 1) {
                grid.gap = remainingHeight / gapRatio;
                grid.gutters.side = (remainingHeight - grid.gap) / 2;
            }
            else {
                grid.gap = remainingHeight;
            };
        }
        else {

            if (layerContainerSize.height === window.innerHeight) {
                grid.gutters.type = "vertical";
                grid.gutters.side = (window.innerWidth - layerContainerSize.width) / 2;
            }
            else {
                grid.gutters.type = "horizontal";
                grid.gutters.side = (window.innerHeight - layerContainerSize.height) / 2;
            };
        };
    };

    return grid;
};