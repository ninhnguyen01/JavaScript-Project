"use strict";
const updateRecord = (assign, propstoUpdate) => {
    return Object.assign(Object.assign({}, assign), propstoUpdate);
};
const assign1 = {
    employeeID: "cp1234",
    name: "Yohan",
    title: "Software engineer",
    income: 72000,
    verified: true,
};
console.log(updateRecord(assign1, { income: 90000 }));
const recordUpdated = updateRecord(assign1, { income: 90000 });
const recordEmployee = (assign) => {
    // send to database, etc.
    return assign;
};
const recordEmployeeUpdate = Object.assign(Object.assign({}, recordUpdated), { verified: true });
recordEmployee(Object.assign(Object.assign({}, recordUpdated), { verified: true }));
