import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { saveProject } from '../actions';

class EditProject extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ cookie: cookies.get('loginStatus') });
  }

  render() {
    if (this.state.cookie) {
      const {
        projectName,
        projectDescription
      } = this.props.currentEdittingProject;
      return (
        <Form>
          <Form.Input label="Project Name" defaultValue={projectName} />
          <Form.TextArea
            label="Project Description"
            defaultValue={projectDescription}
          />
          <Button basic color="yellow" as={Link} to="/myportfolio">
            Save
          </Button>
          <Button basic color="red" as={Link} to="/myportfolio">
            Cancel
          </Button>
        </Form>
        // TODO: add saveProject action callback
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ currentEdittingProject, user }) => {
  return { currentEdittingProject, user };
};

export default connect(mapStateToProps, { saveProject })(EditProject);
