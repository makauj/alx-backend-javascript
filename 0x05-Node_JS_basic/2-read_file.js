const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1); // remove header
    const fieldData = {};

    let total = 0;

    for (const line of students) {
      const parts = line.split(',');
      if (parts.length < 4) continue; // skip malformed lines
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
