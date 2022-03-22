console.log('JS ok');

/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

// Creo array che contiene 10 elementi
const zucchineArray = [
    {
        varieta: 'a',
        peso: 1,
        lunghezza: 2,
    },
    {
        varieta: 'b',
        peso: 1.1,
        lunghezza: 2.1,
    },
    {
        varieta: 'c',
        peso: 1.2,
        lunghezza: 2.2,
    },
    {
        varieta: 'd',
        peso: 1.3,
        lunghezza: 2.3,
    },
    {
        varieta: 'e',
        peso: 1.4,
        lunghezza: 2.4,
    },
    {
        varieta: 'f',
        peso: 1.5,
        lunghezza: 2.5,
    },
    {
        varieta: 'g',
        peso: 1.6,
        lunghezza: 2.6,
    },
    {
        varieta: 'h',
        peso: 1.7,
        lunghezza: 2.7,
    },
    {
        varieta: 'k',
        peso: 1.8,
        lunghezza: 2.8,
    },
    {
        varieta: 'i',
        peso: 1.9,
        lunghezza: 2.9,
    },
];

/**
 * Given an array of objects, return the total weight of all the objects
 * @returns The total weight of all the zucchine objects in the array.
 */
function pesoTotZucchine(){
    let pesoTot = 0;
    for (let i=0; i<zucchineArray.length; i++){
        const zucchinaObj = zucchineArray[i];
        pesoTot += zucchinaObj.peso;
    }
    
    console.log(pesoTot);
    return pesoTot;

}

pesoTotZucchine();
