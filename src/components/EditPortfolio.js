import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePortfolio } from '../actions';
import { Button, Form } from 'semantic-ui-react';

class EditPortfolio extends Component {
  renderPortfolio() {
    if (this.props.currentUserPortfolio) {
      const { name, email } = this.props.currentUserPortfolio;

      return (
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" defaultValue={name} />
            <Form.Input label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Email" defaultValue={email} />
            <Form.Input label="Phone" placeholder="Phone" />
          </Form.Group>
          <Button
            basic
            color="yellow"
            as={Link}
            to="/myportfolio"
            onClick={() => console.log('add clicked')}
          >
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
    return <div>{this.renderPortfolio()}</div>;
  }
}

const mapStateToProps = ({ currentUserPortfolio }) => {
  return { currentUserPortfolio };
};

export default connect(mapStateToProps, { savePortfolio })(EditPortfolio);
