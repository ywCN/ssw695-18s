import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { saveProject } from '../actions';

class AddProject extends Component {
  state = {
    projectName: '',
    projectDescription: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const cookie = new Cookies().get('loginStatus');
    const { projectName, projectDescription } = this.state;
    this.props.saveProject(
      {
        name: projectName,
        description: projectDescription
      },
      cookie
    );
  };

  render() {
    const { projectName, projectDescription } = this.state;
    return (
      <Form>
        <Form.Input
          fluid
          label="Project Name"
          // placeholder="Project Name"
          name="projectName"
          value={projectName}
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          label="Project Description"
          // placeholder="project Description"
          name="projectDescription"
          value={projectDescription}
          onChange={this.handleChange}
        />
        <Button
          basic
          color="yellow"
          as={Link}
          to="/myportfolio"
          onClick={() => {
            console.log('add clicked');
            this.handleSubmit();
          }}
        >
          Add
        </Button>
        <Button
          basic
          as={Link}
          to="/myportfolio"
          color="red"
          onClick={() => console.log('cancel clicked')}
        >
          Cancel
        </Button>
      </Form>
    );
  }
}

export default connect(null, { saveProject })(AddProject);
