// Branded interface holding the credits of a major subject
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Branded interface holding the credits of a minor subject
export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Sums the credits of two major subjects
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Sums the credits of two minor subjects
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}
