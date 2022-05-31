export const elements = {
    pencil: document.getElementById("pencil"),
    tampa: document.getElementById('tampa'),
    corpo: document.getElementById('corpo'),
    cor: document.getElementById('cor'),
}

export const clearUI = () => {
    elements.pencil.innerHTML = "";
}