export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartment(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
