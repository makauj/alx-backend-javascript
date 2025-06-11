const http = require('http');
const fs = require('fs');

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

    if (!databasePath) {
      res.writeHead(200);
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(200);
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // skip header

      const grouped = {};
      students.forEach((line) => {
        const parts = line.split(',');
        if (parts.length < 4) return;

        const firstname = parts[0];
        const field = parts[3];

        if (!grouped[field]) grouped[field] = [];
        grouped[field].push(firstname);
      });

      const total = students.length;

      let response = `This is the list of our students\nNumber of students: ${total}`;
      Object.entries(grouped).forEach(([field, names]) => {
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      });

      res.writeHead(200);
      res.end(response);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(port, host);

module.exports = app;
