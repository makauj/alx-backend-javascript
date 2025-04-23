export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === student.id);
    if (gradeObj.length > 0) {
      return {
      ...student,
      grade: gradeObj[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
