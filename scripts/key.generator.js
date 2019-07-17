const rl = require('readline-sync');
const { encrypt }  = require('./encrypt.decrypt');
const fs = require('fs');

const privateKey = rl.question('Enter the entire key to encrypt: --> ');

fs.writeFile('securekey.txt', encrypt(privateKey), 'utf8', ()=> {

});

