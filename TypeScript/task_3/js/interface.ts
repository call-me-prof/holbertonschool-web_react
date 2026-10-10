// Identifier of a row stored in the database
export type RowID = number;

// Shape of a row stored in the database
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
