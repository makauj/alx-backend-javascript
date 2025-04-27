import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function updateRow(row: RowElement): RowID;
export function deleteRow(row: RowID): void;
