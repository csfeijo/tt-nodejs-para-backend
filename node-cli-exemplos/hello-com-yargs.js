const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { nome, dia } = argv;

console.log(`Hello ${nome}, hoje é ${dia}`);
