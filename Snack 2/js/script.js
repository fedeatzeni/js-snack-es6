// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, 
// falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        "nome": "squadra1",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    {
        "nome": "squadra2",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    {
        "nome": "squadra3",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    {
        "nome": "squadra4",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    {
        "nome": "squadra5",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

]

// random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (let key in teams) {
    teams[key].puntiFatti = randomNumber(0, 10);
    teams[key].falliSubiti = randomNumber(0, 10);

}

//console.table(teams);

let arrayOutput = []

for (let key in teams) {
    arrayOutput.push({"nome": teams[key].nome, "puntiFatti": teams[key].puntiFatti});
}

console.log(arrayOutput);
