console.log('JS ok');

/* Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

// Creo array che contiene 10 elementi
const zucchineArray = [
    {
        varieta: 'a',
        peso: 1,
        lunghezza: 21,
    },
    {
        varieta: 'b',
        peso: 1.1,
        lunghezza: 14,
    },
    {
        varieta: 'c',
        peso: 1.2,
        lunghezza: 30,
    },
    {
        varieta: 'd',
        peso: 1.3,
        lunghezza: 27,
    },
    {
        varieta: 'e',
        peso: 1.4,
        lunghezza: 12,
    },
    {
        varieta: 'f',
        peso: 1.5,
        lunghezza: 4,
    },
    {
        varieta: 'g',
        peso: 1.6,
        lunghezza: 20,
    },
    {
        varieta: 'h',
        peso: 1.7,
        lunghezza: 7,
    },
    {
        varieta: 'k',
        peso: 1.8,
        lunghezza: 16,
    },
    {
        varieta: 'i',
        peso: 1.9,
        lunghezza: 15,
    },
];


// Funzione  che calcola il peso delle zucchine corte
function pesoTotZucchineCorte(){
    let pesoTot = 0;
    for (let i=0; i<zucchineArray.length; i++){
        const zucchinaObj = zucchineArray[i];
        pesoTot += zucchinaObj.peso;
    }
    
    console.log('Il peso tot delle zucccchine corte è: ' + pesoTot);
    return pesoTot;
}

// Funzione  che calcola il peso delle zucchine lunghe
function pesoTotZucchineLunghe(){
    let pesoTot = 0;
    for (let i=0; i<zucchineArray.length; i++){
        const zucchinaObj = zucchineArray[i];
        pesoTot += zucchinaObj.peso;
    }
    
    console.log('Il peso tot delle zucccchine lunghe è: ' + pesoTot);
    return pesoTot;

}

pesoTotZucchineCorte();
pesoTotZucchineLunghe();