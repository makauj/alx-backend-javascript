export interface Teacher {
  firstName: string;
  lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}