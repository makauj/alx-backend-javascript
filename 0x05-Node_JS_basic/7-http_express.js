const express = require('express');
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DB = args[0];
const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (_, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DB); 
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port);

module.exports = app;
