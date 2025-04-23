export default function getListStudentIds(studentList) {
  return Array.isArray(studentList) ? studentList.map((student) => student.id) : [];
}
