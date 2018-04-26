import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import Accept from './Accept';
import { savePortfolio } from '../actions';

class EditPortfolio extends Component {
  renderPortfolio() {
    if (this.props.user) {
      const { username, email } = this.props.user.user;

      return (
        <Form>
          <Form.Group widths={3}>
            <Form.Input label="Name" defaultValue={username} />
            <Form.Input label="Email" defaultValue={email} />
            <Form.Input label="Phone" placeholder="Phone" />
          </Form.Group>
          <Button basic color="yellow" as={Link} to="/myportfolio">
            Save
          </Button>
          <Button basic color="red" as={Link} to="/myportfolio">
            Cancel
          </Button>
        </Form>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div>
        {this.renderPortfolio()}
        <Accept />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { savePortfolio })(EditPortfolio);
