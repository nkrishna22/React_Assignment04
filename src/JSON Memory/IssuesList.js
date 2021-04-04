import React from 'react';
import Issue from './Issue'

export default class IssuesList extends React.Component {
    render() {
        let IssuesNodes = this.props.issues.map(issue => (
            <Issue ID={issue.ID} Issue_Description={issue.Issue_Description} Severity={issue.Severity} Status={issue.Status}/>
        ));

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Issue_Description</th>
                            <th>Severity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {IssuesNodes}
                    </tbody>
                </table>
            </>
        )
    }
}