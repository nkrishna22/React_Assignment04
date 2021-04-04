import React from 'react';
import IssuesList from './IssuesList';
import {Link} from "react-router-dom";

export default class AllIssuesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {issues: []};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Issue List</h1>
        <IssuesList issues={this.props.issues} onIssueClick={this.props.onIssueClick}/>
        <Link to="/addissue">Add Issue</Link>
      </div>
    );
  }
}