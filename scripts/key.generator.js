const readline = require('readline');
const { encrypt }  = require('./encrypt.decrypt');
const fs = require('fs');

const getText = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

getText.question('Enter the entire key to encrypt: --> ', (privateKey) => {
    fs.writeFile('securekey.txt', encrypt(privateKey), 'utf8', ()=> {});
    getText.close();
  });
