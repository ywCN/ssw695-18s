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
          <Form.Group widths={3}>
            <Form.Input label="Name" defaultValue={name} />
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

  renderUpload = () => {
    return (
      <form method="post" encType="multipart/form-data">
         <div>
             <label htmlFor="profile_pic">Choose file to upload</label>
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            accept=".jpg, .jpeg, .png"
            onChange={e => console.log(e)}
          />
        </div>
        <div>
             <button>Submit</button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div>
        {this.renderPortfolio()}
        {this.renderUpload()}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUserPortfolio }) => {
  return { currentUserPortfolio };
};

export default connect(mapStateToProps, { savePortfolio })(EditPortfolio);
