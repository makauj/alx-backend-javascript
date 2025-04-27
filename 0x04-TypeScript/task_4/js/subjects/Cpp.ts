namespace Subjects {
  export interface Teacher {
    experienceTeaching?: number;
  }

  export class Cpp extends Subjects.Subjects {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeaching <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
