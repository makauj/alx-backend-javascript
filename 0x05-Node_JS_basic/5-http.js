const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1245;
const host = '127.0.0.1';

const app = http.createServer((req, res) => {
  const { url } = req;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.writeHead(200);
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];

    res.writeHead(200);
    res.write('This is the list of our students\n');

    if (!databasePath) {
      res.end('Cannot load the database');
      return;
    }

    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // remove header

      const grouped = {};

      students.forEach((line) => {
        const parts = line.split(',');
        if (parts.length < 4) return;

        const field = parts[3];
        if (!grouped[field]) grouped[field] = [];
        grouped[field].push(parts[0]);
      });

      const total = students.length;
      res.write(`Number of students: ${total}\n`);

      for (const [field, names] of Object.entries(grouped)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }

      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(port, host, () => {
  console.log();
});

module.exports = app;
