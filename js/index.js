import { Pencil } from "./models/Pencil.js";

import * as pencilView from "./views/pencilView.js";

import {
    clearUI,
    elements
} from "./views/base.js";

const changePencilColors = () => {
    let pencil = new Pencil(
        elements.cor.value,
        elements.corpo.value,
        elements.tampa.value,
        );

    pencil.getPencil();

    clearUI();
    pencilView.renderPencil(
        pencil
        );
}

elements.tampa.addEventListener('change', changePencilColors);
elements.corpo.addEventListener('change', changePencilColors);
elements.cor.addEventListener('change', changePencilColors);
window.addEventListener("load", changePencilColors);