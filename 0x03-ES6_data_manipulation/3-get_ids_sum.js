export default function getStudentIdsSum(studentList) {
  return studentList.reduce((arr, student) => arr + student.id, 0);
}
