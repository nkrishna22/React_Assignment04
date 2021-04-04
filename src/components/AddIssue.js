import React from 'react';
import IssueApi from './IssueApi';
import IssuesList from './IssuesList';

export default class AllEmployeePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {issues:[]};
  }
  componentDidMount() {
    //this.setState({issues:IssueApi.getAllIssues()});
    IssueApi.getAllIssues(data => this.setState({issues:data}));
  }
  render() {
    return (
      <>
        <h1>Issues List From JSON Server</h1>
        <IssuesList issues={this.state.issues} />
      </>
    );
  }
}