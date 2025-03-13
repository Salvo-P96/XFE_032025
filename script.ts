function coloreInEsadecimale(nomeColore: string): string {
    const colori: { [key: string]: string } = {
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

    if (colori[colore]) {
        return colori[colore];
    } else {
        return "Colore non trovato!";
    }
}

function selectColor(){
    let color1 = document.querySelector(".choice")?.innerHTML;
    // document.querySelector(".dropbtn")
    alert("colori")
}

// Essendo .choice una classe, devi usare querySelectorAll() perchè recupera una lista di elementi,
//Successivamente ciclarli e scrivere la logica,
/*
let buttons = document.querySelectorAll('.choice');
buttons.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', (event) => {
        console.log(event)
        event.preventDefault();
        const color = event.target as HTMLButtonElement;    
        const buttonText = color.innerText;
    alert(buttonText); 
    })
})*/
document.querySelector('.choice')?.addEventListener('click', (event) => {
    // è una funzione, bisogna scrivere preventDefault()
    event.preventDefault;
    const color = event.target as HTMLButtonElement;
    
    const buttonText = color.innerText;
    //Perchè non passi la variabile buttonText al posto di color.innerText???
    alert(color.innerText); 
});
