function colorHexa(nomeColore) {
    const colori = {
        "black": "#000000",
        "white": "#FFFFFF",
        "red": "#FF0000",
        "green": "#008000",
        "blue": "#0000FF",
        "yellow": "#FFFF00",
        "cyan": "#00FFFF",
        "magenta": "#FF00FF",
        "gray": "#808080",
        "lightgray": "#D3D3D3",
        "darkgray": "#A9A9A9",
        "pink": "#FFC0CB",
        "brown": "#A52A2A",
        "orange": "#FFA500",
        "purple": "#800080",
        "lime": "#00FF00",
        "aqua": "#00FFFF",
        "teal": "#008080",
        "navy": "#000080"
    };
    const colore = nomeColore.toLowerCase();
    if (colore in colori) {
        return colori[colore];
    } else {
        return "undefined color"
    }
}
function selectColor(colorName) {
    let funcRes = colorHexa(colorName);
    setColor(funcRes);
}

let buttons = document.querySelectorAll('.choice');
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
    })
});


function setColor(color) {
    let parent = document.querySelector('.carLogo').contentDocument;
    let carCol = parent.querySelector("svg");
    carCol.setAttribute("fill", color);
}

