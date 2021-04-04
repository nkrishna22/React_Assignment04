import React from 'react';
import {Field, Form, withFormik} from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  description: yup.string().required().ensure().min(3),
  severity: yup.string().required().oneOf(['Major', 'Minor', 'Critical']),
  status: yup.string().required().oneOf(['Open', 'Closed', 'In Progress']),
});

class AddIssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {
        description: "",
        severity: "Minor",
        status: "Open",
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  async onSubmit(values) {
    if (this.props.onSubmitIssue) {
      this.props.onSubmitIssue(values)
    }
  }

  onValueChange(event) {
    this.setState({
      status: event.target.value
    });
  }

  render() {
    let issue = this.state.issue
    console.log(`Props = `, this.props)
    return (
      <div>
        <h1>Add Issue</h1>
        <Form className={'add-issues-form'}>
          <div className='form-field'>
            <label htmlFor="description">Description</label>
            <Field id="description" name="description"/>
            {this.props.errors.description && <span className={'error-message'}>
              {this.props.errors.description}
            </span>}
          </div>

          <div className='form-field'>
            <label htmlFor="severity">Severity</label>
            <Field id="severity" name="severity" as="select">
              <option value="Major">Major</option>
              <option value="Minor">Minor</option>
              <option value="Critical">Critical</option>
            </Field>
          </div>


          <div role="group" aria-labelledby="issue-status" className='form-field'>
            <label htmlFor="status">Status</label>
            <label>
              <Field type="radio" name="status" value="Open"/>
              Open
            </label>
            <label>
              <Field type="radio" name="status" value="Closed"/>
              Closed
            </label>
            <label>
              <Field type="radio" name="status" value="In Progress"/>
              In Progress
            </label>
          </div>

          <input type="submit" value="Submit" onSubmit={this.onSubmit}/>
        </Form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    description: "",
    severity: "Minor",
    status: "Open",
  }),
  handleSubmit: (values, formikBag) => {
     formikBag.props.onSubmitIssue(values)
  },
  validationSchema: schema,
  validateOnChange: true,
  validateOnBlur: true,
})(AddIssueForm)