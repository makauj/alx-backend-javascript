#!/usr/bin/node
// a program named 1-stdin.js that will be executed through command line:
//It should display the message Welcome to ALX, what is your name? (followed by a new line)
//The user should be able to input their name on a new line
//The program should display Your name is: INPUT
//When the user ends the program, it should display This important software is now
//closing (followed by a new line)

function main() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Welcome to ALX, what is your name?');
  rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close();
  });
}

exports.main = main;
if (require.main === module) {
  main();
}
