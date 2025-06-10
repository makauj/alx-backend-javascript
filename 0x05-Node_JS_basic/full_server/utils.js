const fs = require('fs').promises;

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        return {};
      }

      const studentsByField = {};
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = line.split(',');
        const firstName = values[0].trim();
        const field = values[3].trim(); // Assuming the 4th column is field

        if (firstName && field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
      }

      return studentsByField;
    })
    .catch((err) => {
      // Reject promise with error
      return Promise.reject(err);
    });
}

module.exports = readDatabase;
