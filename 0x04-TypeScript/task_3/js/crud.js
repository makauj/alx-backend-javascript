export function insertRow(row) {
  console.log("Inserting row:", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowID) {
  console.log(`Deleting row ${rowID}`);
  return;
}

export function updateRow( rowID,row) {
  console.log(`Updating row ${rowID}`, row);
  return rowID;
}
