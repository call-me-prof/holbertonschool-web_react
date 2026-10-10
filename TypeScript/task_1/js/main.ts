// Interface describing a teacher, open to any extra attribute
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Interface describing a director, a teacher with reports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface describing the signature of the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface describing the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the StudentClass instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Returns the first letter of the first name and the full last name
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher('John', 'Doe'));

// Class describing a student of the school
class StudentClass implements StudentClassInterface {
  private firstName: string;

  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Returns the current activity of the student
  workOnHomework(): string {
    return 'Currently working';
  }

  // Returns the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

const Student: StudentClassConstructor = StudentClass;
const student: StudentClassInterface = new Student('John', 'Doe');

console.log(student.displayName());
console.log(student.workOnHomework());
