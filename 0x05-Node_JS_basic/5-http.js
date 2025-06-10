#!/usr/bin/node
// small HTTP server

const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

const DB_PATH = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let responseText = 'This is the list of our students\n';

    countStudents(DB_PATH)
      .then(() => {
        // To avoid duplicate output from `countStudents`,
        // we re-read the file to construct the student breakdown again
        return fs.promises.readFile(DB_PATH, 'utf8');
      })
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
        const fieldData = {};
        let total = 0;

        for (const line of students) {
          const parts = line.split(',');
          if (parts.length < 4) continue;
          const firstName = parts[0].trim();
          const field = parts[3].trim();

          if (!fieldData[field]) fieldData[field] = [];
          fieldData[field].push(firstName);
          total += 1;
        }

        responseText += `Number of students: ${total}\n`;
        for (const field in fieldData) {
          const list = fieldData[field];
          responseText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }

        res.end(responseText.trim());
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
