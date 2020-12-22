import {hor, ver} from "../../../settings";

export default function positioning(coords) {
    return `
        position: absolute;
        left: ${hor[coords[0]]}%;
        top: ${ver[coords[1]]}%;
        width: ${hor[coords[2]]}%;
        height: ${ver[coords[3]]}%; 
    `;
}