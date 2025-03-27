const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { nome, curso } = argv;

console.log("Executando o programa...");
console.log(`Seu nome é ${nome} e este é o curso de ${curso}`);
