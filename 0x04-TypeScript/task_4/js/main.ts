export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const TeacherCLass: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeaching: 5,
};

console.log('c++');
cpp.setTeacher = TeacherCLass;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('java');
java.setTeacher = TeacherCLass;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = TeacherCLass;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
