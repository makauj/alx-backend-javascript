const fs = require('fs');

// eslint-disable
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // Skip header line

      const result = {};
      let total = 0;

      for (const line of students) {
        const fields = line.split(',');
        if (fields.length < 4) continue;

        const firstname = fields[0];
        const field = fields[3];

        if (!result[field]) {
          result[field] = [];
        }

        result[field].push(firstname);
        total += 1;
      }

      console.log(`Number of students: ${total}`);
      for (const [field, names] of Object.entries(result)) {
        // eslint-disable-line
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
