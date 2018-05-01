import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Icon, Form, Divider, Image } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { fetchPortfolio, setEdittingProject } from '../actions';

class MyPortfolio extends Component {
  componentWillMount() {
    const cookie = new Cookies().get('loginStatus');
    this.setState({ cookie });
    this.props.fetchPortfolio(cookie);
  }

  renderPortfolio() {
    if (this.props.user) {
      const { username, email } = this.props.user.user;
      // const { image } = this.props.currentUserPortfolio; // note this link is broken

      return (
        <Form>
          <Image
            floated="left"
            size="small"
            src="https://www0.sun.ac.za/chemistry/images/0/0b/Blank_avatar.jpeg" // this is a defaut pic as the image on server is broken
          />
          <Form.Group widths={3}>
            <Form.Input label="Name" defaultValue={username} readOnly />
            <Form.Input label="Email" defaultValue={email} readOnly />
            <Form.Input label="Phone" defaultValue="Phone" readOnly />
          </Form.Group>
          <Button animated as={Link} to="/editportfolio">
            <Button.Content visible>Edit Portfolio</Button.Content>
            <Button.Content hidden>
              <Icon name="write" />
            </Button.Content>
          </Button>
        </Form>
      );
    } else {
      return <div />;
    }
  }
  renderProjectsHelper() {
    if (this.props.currentUserPortfolio) {
      const { projects } = this.props.currentUserPortfolio;

      return projects
        .filter(project => project.user === this.props.user.user.username)
        .map(project => {
          const { name, description } = project;
          return (
            // TODO: use id for key
            <Form key={name + Math.random()}>
              <Form.Input label="Project Name" defaultValue={name} readOnly />
              <Form.TextArea
                label="Project Description"
                defaultValue={description}
                readOnly
              />
              <Button
                animated
                as={Link}
                to="/editproject"
                onClick={() => {
                  this.props.setEdittingProject(project);
                }}
              >
                <Button.Content visible>Edit</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button>
              <Divider section />
            </Form>
          );
        });
    } else {
      return <div />;
    }
  }

  renderProjects() {
    return (
      <div>
        {this.renderProjectsHelper()}
        <Button
          animated
          color="green"
          as={Link}
          to="/addproject"
          onClick={() => console.log('Add Project clicked')}
          floated="right"
        >
          <Button.Content visible>Add Project</Button.Content>
          <Button.Content hidden>
            <Icon name="add" />
          </Button.Content>
        </Button>
      </div>
    );
  }

  render() {
    if (this.state.cookie && this.props.user) {
      return (
        <div>
          <Divider horizontal>Portfolio</Divider>
          {this.renderPortfolio()}
          <Divider horizontal>Projects</Divider>
          {this.renderProjects()}
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ currentUserPortfolio, user }) => {
  return { currentUserPortfolio, user };
};

export default connect(mapStateToProps, { fetchPortfolio, setEdittingProject })(
  MyPortfolio
);
