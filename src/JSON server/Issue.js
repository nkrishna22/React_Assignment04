import React from 'react';

export default class Issue extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.Issue_Description}</td>
                <td>{this.props.Severity}</td>
                <td>{this.props.Status}</td>
            </tr>
        );
    }
}