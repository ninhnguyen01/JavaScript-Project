interface employeeRecord {
    employeeID: string,
    name: string,
    title: string,
    income: number,
    verified?: boolean
}

const updateRecord = (assign: employeeRecord, propstoUpdate: Partial<employeeRecord>): 
employeeRecord => { return{...assign, ...propstoUpdate}
} 

const assign1: employeeRecord = {
    employeeID: "cp1234",
    name: "Yohan",
    title: "Software engineer",
    income: 72000,
    verified: true,
}

console.log(updateRecord(assign1, {income: 90000}));
const recordUpdated: employeeRecord = updateRecord(assign1, {income: 90000});

const recordEmployee = (assign: Required<employeeRecord>): employeeRecord => {
    // send to database, etc.
    return assign
}

const recordEmployeeUpdate: Readonly<employeeRecord> = { ...recordUpdated, verified: true}

recordEmployee({...recordUpdated, verified: true})