const http = require('http');
const fs = require('fs');

const DB_FILE = process.argv[2]; // database file path

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const fieldIdx = headers.indexOf('field');
      const firstNameIdx = headers.indexOf('firstname');

      const studentsByField = {};

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue; // Skip empty lines

        const student = line.split(',');
        const field = student[fieldIdx];
        const firstname = student[firstNameIdx];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }

      let output = `Number of students: ${lines.length - 1}\n`;
      for (const [field, names] of Object.entries(studentsByField)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(DB_FILE)
      .then((studentList) => {
        res.end(`This is the list of our students\n${studentList}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(1245, '127.0.0.1'); // ← bound to specific hostname

module.exports = app;
