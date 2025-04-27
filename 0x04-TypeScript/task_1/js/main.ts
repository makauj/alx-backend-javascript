export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

export interface Director extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(teacher: Teacher): string {
  return `${teacher.firstName} ${teacher.lastName} is a teacher`;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): Student;
}

export interface StudentClass {
  firstName: string;
  lastName: string;
}

export class Student implements StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
    firstName: string;
    lastName: string;

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}
  
export function createStudent(student: StudentClassConstructor, firstName: string, lastName: string): StudentClass {
  return new Student(firstName, lastName);
}
