import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon, Form, Input, TextArea } from 'semantic-ui-react';

import { saveProject } from '../actions';

class AddProject extends Component {
  render() {
    return (
      <Form>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Project Name"
          placeholder="Project Name"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Project Description"
          placeholder="Project Description"
        />
        <div>
          <Button
            basic
            color="yellow"
            as={Link}
            to="/myportfolio"
            onClick={() => console.log('add clicked')}
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
        </div>
      </Form>
      // TODO: add saveProject action callback
    );
  }
}

export default connect(null, { saveProject })(AddProject);
