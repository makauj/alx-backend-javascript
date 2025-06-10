#!/usr/bin/node

const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const students = lines.slice(1); // Remove header
      const fieldData = {};
      let total = 0;

      for (const line of students) {
        const parts = line.split(',');
        if (parts.length < 4) continue;
        const firstName = parts[0].trim();
        const field = parts[3].trim();

        if (!fieldData[field]) {
          fieldData[field] = [];
        }

        fieldData[field].push(firstName);
        total += 1;
      }

      console.log(`Number of students: ${total}`);
      for (const field in fieldData) {
        const list = fieldData[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;

