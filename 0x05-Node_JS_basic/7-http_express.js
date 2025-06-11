const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);

      const grouped = {};
      for (const line of students) {
        const parts = line.split(',');
        if (parts.length < 4) continue;

        const field = parts[3];
        if (!grouped[field]) grouped[field] = [];
        grouped[field].push(parts[0]);
      }

      let result = `Number of students: ${students.length}`;
      for (const [field, names] of Object.entries(grouped)) {
        result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(result);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  try {
    const summary = await countStudents(databasePath);
    res.send(`This is the list of our students\n${summary}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
