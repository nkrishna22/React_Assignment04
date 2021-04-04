import employeedata from './employeedata';

export default class EmployeeApi {
    static getAllEmployees() {
        return employeedata.Employees;
    }
}