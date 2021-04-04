import React from 'react';
import Employee from './Employee';

export default class EmployeeList extends React.Component {
    render() {
        let EmployeeNodes = this.props.employees.map(employee => (
            <Employee empid={employee.empid} name={employee.name} band={employee.band} />
            
        ));
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Band</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeNodes}
                </tbody>
            </table>
            </>
        );
    }
}