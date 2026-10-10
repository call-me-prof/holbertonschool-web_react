/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Row to insert in the database
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Identifier returned by the insert command
const newRowID: RowID = CRUD.insertRow(row);

// Same row with the age field added
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
