// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const array = []
const n1 = 9
const n2 = 19

function between(list, a, b) {
    for (let i = 0; i < (b - a) -1; i++) {
        list.push(a + i +1);
    }

    return list
}

console.log(between(array, n1, n2));
