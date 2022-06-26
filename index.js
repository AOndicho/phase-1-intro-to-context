// Your code here
function createEmployeeRecord(array) {
  const employeeObject = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeObject;
}

function createEmployeeRecords(arrays) {
  const employeeObjectsArray = [];
  for (let array of arrays) {
    const employee = createEmployeeRecord(array);
    employeeObjectsArray.push(employee);
  }
  return employeeObjectsArray;
}

function createTimeInEvent(employee, date) {
  const timeInEventObject = {
    type: "TimeIn",
    hour: date,
    date: date,
  };
  const employeeObject = createEmployeeRecord(employee);
  employeeObject["timeInEvents"].push(timeInEventObject);

  return employeeObject;
}

function createTimeOutEvent() {}

function hoursWorkedOnDate() {}

function wagesEarnedOnDate() {}

function allWagesFor() {}

function calculatePayroll() {}
