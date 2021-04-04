import React from 'react';
import IssueApi from './IssueApi';
import IssuesList from './IssuesList';

export default class AllEmployeePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {issues:[]};
    }
    componentDidMount() {
        this.setState({issues:IssueApi.getAllIssues()});
    }
    render() {
        return (
            <>
            <h1>Issues List</h1>
            <IssuesList issues={this.state.issues} />
            </>
        );
    }
}