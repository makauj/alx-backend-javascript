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

module.exports = main;
