import React from 'react';
import AllIssuesPage from './JSON server/AllIssuesPage';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import AddIssueForm from "./components/AddIssueForm";
import IssuesActions from "./flux/IssuesActions";
import IssueApi from "./JSON server/IssueApi";
import store from "./flux/store";
import {Redirect} from 'react-router';
import Issue from "./components/Issue";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      issues: [],
      viewIssue: null,
    }
    this.onSubmitIssue = this.onSubmitIssue.bind(this);
    this.loadIssue = this.loadIssue.bind(this);
  }

  onSubmitIssue(issue) {
    console.log('Adding new issue', issue)
    let nextId = store.getAllIssues().length + 1;
    let newIssue = {
      ID: nextId,
      Issue_Description: issue.description,
      Severity: issue.severity,
      Status: issue.status,
    }
    IssuesActions.addIssue(newIssue);
    this.props.history.push('/issues')
  }

  componentDidMount() {

    let self = this;
    IssueApi.getAllIssues(data => {
      IssuesActions.initialize(data)
      let issues = store.getAllIssues()
      self.setState({issues: issues})
    });
  }

  loadIssue(issue) {
    console.log(`Loading issue`, issue)
    this.setState({viewIssue: issue})
    this.props.history.push('/issue/' + issue.ID);
  }

  render() {
    return (
      <div className={'app'}>
        <nav className='nav-links'>
          <Link to="/about">About</Link>
          <Link to="/issues">Issues</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/issues">
            <AllIssuesPage issues={this.state.issues} onIssueClick={this.loadIssue}/>
          </Route>
          <Route path="/issue/:id">
            <Issue issue={this.state.viewIssue}/>
          </Route>
          <Route path="/addissue">
            <AddIssueForm onSubmitIssue={this.onSubmitIssue}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
