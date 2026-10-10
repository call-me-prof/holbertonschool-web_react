/// <reference path="./Subject.ts" />
namespace Subjects {
  // Declaration merging: a teacher may have experience teaching React
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Subject describing the React class
  export class React extends Subject {
    // Returns the requirements of the subject
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Returns the teacher able to teach the subject
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
