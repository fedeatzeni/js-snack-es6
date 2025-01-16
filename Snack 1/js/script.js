// Creare un array di oggetti: Ogni oggetto descriverà una bici da 
// corsa con le seguenti proprietà: nome e peso. Stampare a schermo
// la bici con peso minore.

const bici = [
    {
        "nome": "bici1",
        "peso": 13,
    },

    {
        "nome": "bici2",
        "peso": 10,
    },

    {
        "nome": "bici3",
        "peso": 10,
    },

    {
        "nome": "bici4",
        "peso": 9,
    },

    {
        "nome": "bici5",
        "peso": 20,
    },

];

console.table(bici);

// flag
let pesoMin = bici[0].peso;
let nomePesoMin;

for (let key in bici) {
    if (bici[key].peso < pesoMin) {
        pesoMin = bici[key].peso
        nomePesoMin = bici[key].nome
    }
}

console.log(nomePesoMin)

// output display
const div = document.querySelector("div")
div.innerText = `la bici più leggera è la ${nomePesoMin} con peso di ${pesoMin}kg`