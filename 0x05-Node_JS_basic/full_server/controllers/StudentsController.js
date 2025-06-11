import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];

    try {
      const data = await readDatabase(database);
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let response = 'This is the list of our students';
      for (const field of fields) {
        const names = data[field];
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(database);
      const names = data[major];

      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
