import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeApi from './EmployeeApi';

export default class AllEmployeePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees:[]};
    }
    componentDidMount() {
        this.setState({employees:EmployeeApi.getAllEmployees()});
    }
    render() {
        return (
            <>
            <h1>Employees List In memory</h1>
            <EmployeeList employees={this.state.employees}/>
            </>
        );
    }
}