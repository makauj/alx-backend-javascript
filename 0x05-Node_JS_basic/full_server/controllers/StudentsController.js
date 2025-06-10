const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      // Sort fields alphabetically (case insensitive)
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let responseText = 'This is the list of our students\n';
      for (const field of fields) {
        const students = data[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).type('text/plain').send(responseText.trim());
    } catch {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const students = data[major] || [];
      const responseText = `List: ${students.join(', ')}`;
      res.status(200).type('text/plain').send(responseText);
    } catch {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
