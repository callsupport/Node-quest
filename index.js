// Require du dotenv package
require("dotenv").config();

// Assigne les variables d'environnement à des variables
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affiche le message dans la console
console.log(`I am ${name}, wilder in ${city}, and I love ${language}`);
