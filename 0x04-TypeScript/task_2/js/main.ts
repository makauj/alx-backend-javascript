export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home" 
  }
  getCoffeeBreak(): string {
    return "Getting cofee break"
  }
  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}
  
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home"
  }
  getCoffeeBreak(): string {
    return "Cannot have a coffee break"
  }
  workTeacherTasks(): string {
    return "Getting to work"
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else if (typeof salary === 'number' && salary >= 500) {
    return new Director();
  } else {
    throw new Error("Invalid salary");
  }
}

export function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  } else {
    throw new Error("Invalid employee");
  }
}

export type Subjects = ("Math" | "History");

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
}
