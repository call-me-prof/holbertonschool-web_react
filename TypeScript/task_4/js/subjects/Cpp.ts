/// <reference path="./Subject.ts" />
namespace Subjects {
  // Declaration merging: a teacher may have experience teaching C
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Subject describing the Cpp class
  export class Cpp extends Subject {
    // Returns the requirements of the subject
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Returns the teacher able to teach the subject
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
