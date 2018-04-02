import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { saveProject } from '../actions';
import Landing from './Landing';

class EditProject extends Component {
  render() {
    const cookies = new Cookies();
    const cookie = cookies.get('loginStatus');
    if (cookie) {
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
          <Button
            basic
            color="yellow"
            as={Link}
            to="/myportfolio"
            onClick={() => console.log('add clicked')}
          >
            Save
          </Button>
          <Button
            basic
            color="red"
            as={Link}
            to="/myportfolio"
            onClick={() => console.log('cancel clicked')}
          >
            Cancel
          </Button>
        </Form>
        // TODO: add saveProject action callback
      );
    } else {
      this.props.history.push('/');
      return <Landing />;
    }
  }
}

const mapStateToProps = ({ currentEdittingProject, user }) => {
  return { currentEdittingProject, user };
};

export default connect(mapStateToProps, { saveProject })(
  withRouter(EditProject)
);
