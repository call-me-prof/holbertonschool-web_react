/// <reference path="./Teacher.ts" />
namespace Subjects {
  // Base class shared by every subject
  export class Subject {
    teacher: Teacher;

    // Sets the teacher in charge of the subject
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
