import React from 'react';
import {Link, withRouter} from "react-router-dom";

class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.issue) {
      this.props.history.push('/issues')
    }
  }

  render() {
    if (!this.props.issue) return <Link to="/issues"> Back to Issues</Link>
    return (
      <div>
        <span><b>Issue</b> &nbsp;</span>
        <span>{this.props.issue.Issue_Description}</span>
        {/*<pre>{JSON.stringify(this.props.issue)}</pre>*/}
        <Link to="/issues"> Back to Issues</Link>
      </div>
    );
  }
}

export default withRouter(Issue)