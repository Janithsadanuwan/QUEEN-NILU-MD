/*
===================================================================================================
💃 𝗤𝘂𝗲𝗲𝗻 𝗡𝗶𝗹𝘂 𝗕𝗼𝘁 𝗠𝗱 💃
   ____                           _   _ _ _       
  / __ \                         | \ | (_) |      
 | |  | |_   _  ___  ___ _ __    |  \| |_| |_   _ 
 | |  | | | | |/ _ \/ _ \ '_ \   | . ` | | | | | |
 | |__| | |_| |  __/  __/ | | |  | |\  | | | |_| |
  \___\_\\__,_|\___|\___|_| |_|  |_| \_|_|_|\__,_|
                                                  
                                                  BY Janiya
===================================================================================================
*/

require('./settings');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./lib/language/' + global.LANG + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + global.LANG + ' language...')
    );

    var json = JSON.parse(fs.readFileSync('./lib/language/' + global.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./lib/language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}