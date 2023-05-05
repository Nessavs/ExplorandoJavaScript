console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`) // add um item na lista
console.log("Destinos possíveis: ");
console.log(listaDestinos);

listaDestinos.splice(1,1); // remover da lista
console.log(listaDestinos);
console.log(listaDestinos[1]); //mostrar um