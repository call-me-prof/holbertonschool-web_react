import { RowID, RowElement } from './interface';

// Type declarations for the third party crud library
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
