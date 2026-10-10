/// <reference path="./Subject.ts" />
namespace Subjects {
  // Declaration merging: a teacher may have experience teaching Java
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Subject describing the Java class
  export class Java extends Subject {
    // Returns the requirements of the subject
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Returns the teacher able to teach the subject
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
