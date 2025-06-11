import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);
      const result = {};

      for (const line of students) {
        const parts = line.split(',');
        if (parts.length < 4) continue;

        const firstname = parts[0];
        const field = parts[3];

        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      }

      resolve(result);
    });
  });
}
