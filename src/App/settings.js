// LAYOUT //////////////////////////////////////////////////////////////////////
// Aspect Ratio ---------------------------------------------------------------
const ratioWidth = 2;
const ratioHeight = 3;
const ratio = ratioWidth / ratioHeight;

// Gap -----------------------------------------------------------------------
// Size of gap when two layer containers.
// Setting to 1 takes up all available extra space.
const gapRatio = 5;

// Element Grid ---------------------------------------------------------------
// Determines numbers of unit for a given dimension of a layer.
// Exp: 2 x 3 aspect ratio 
// gridMultipler = 10
// result: 20 x 30 grid
const gridMultiplier = 10;

// RESIZE DELAY ///////////////////////////////////////////////////////////////////////
// Delay time after user resizes window before page refresh.
const delay = 2000;

// COLOR SCHEME //////////////////////////////////////////////////////////////////
const color1 = "hsl(20, 70%, 60%)";
const color2 = "hsl(0, 50%, 50%)";


/////////////////////////////////////////////////////////////////////////////////

const hor = calcUnits(ratioWidth, gridMultiplier);
const ver = calcUnits(ratioHeight, gridMultiplier);

export {
    ratioWidth, ratioHeight, ratio, gapRatio,
    delay, hor, ver, color1, color2,
};

function calcUnits(dimension, gridMultiplier) {
    const result = [];
    const unitNum = dimension * gridMultiplier;
    const unitSize = 100 / unitNum;
    for (let i = 0 ; i <= unitNum ; i++) {
        let unit = unitSize * i;
        if (Number.isInteger(unit)) {
            result[i] = unit;
        }
        else {
            result[i] = Math.round((unit + Number.EPSILON) * 100) / 100;
        }
    }
    return result;
}