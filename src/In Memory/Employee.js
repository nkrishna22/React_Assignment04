import React from "react";

export default class Employee extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.empid}</td>
                <td>{this.props.name}</td>
                <td>{this.props.band}</td>
            </tr>
        );
    }
}