// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
const employees = updateEmployeeWithKeyAndValue(employee, key, value);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value
    //const employess = destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value);
    return employee;

}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    newObj[key] = undefined;       
    
   // delete newObj.key;
    return newObj;
    
}
const employeesNew = deleteFromEmployeeByKey(employee, key);
delete employeesNew.key;

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee [key] = undefined;
    delete employee.key;
    return employee;
}




