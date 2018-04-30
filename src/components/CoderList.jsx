import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  Button,
  Container,
  Modal,
  Card,
  Form,
  Divider,
  Image
} from 'semantic-ui-react';

import {
  fetchCoders,
  setCurrentCoderPortfolio,
  addContact
} from './../actions';

class CoderList extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  componentWillMount() {
    const cookie = new Cookies().get('loginStatus');
    this.setState({ cookie });
    this.props.fetchCoders(cookie);
  }

  renderPortfolio = () => {
    const { name, email } = this.props.currentCoderPortfolio;
    return (
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input label="First name" defaultValue={name} readOnly />
          <Form.Input label="Last name" defaultValue="Last name" readOnly />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input label="Email" defaultValue={email} readOnly />
          <Form.Input label="Phone" defaultValue="Phone" readOnly />
        </Form.Group>
      </Form>
    );
  };
  renderProjectsHelper = () => {
    const { projects } = this.props.currentCoderPortfolio;
    return projects.map(project => {
      const { projectName, projectDescription } = project;
      return (
        <Form key={projectName}>
          <Form.Input
            label="Project Name"
            defaultValue={projectName}
            readOnly
          />
          <Form.TextArea
            label="Project Description"
            defaultValue={projectDescription}
            readOnly
          />
          <Divider section />
        </Form>
      );
    });
  };

  renderProjects = () => {
    return <div>{this.renderProjectsHelper()}</div>;
  };

  renderScrollContent = () => {
    if (this.props.currentCoderPortfolio) {
      return (
        <div>
          <Divider horizontal>Portfolio</Divider>
          {this.renderPortfolio()}
          <Divider horizontal>Projects</Divider>
          {this.renderProjects()}
        </div>
      );
    } else {
      return null;
    }
  };

  renderModal = coder => {
    return (
      <Modal
        dimmer="blurring"
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button
            basic
            color="yellow"
            onClick={() => {
              this.props.setCurrentCoderPortfolio(coder);
              this.handleOpen();
            }}
          >
            View Portfolio
          </Button>
        }
      >
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <div>{this.renderScrollContent()}</div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="yellow"
            onClick={() => {
              this.handleClose();
            }}
          >
            Exit
          </Button>
          <Button
            basic
            color="red"
            onClick={() =>
              this.props.addContact(
                this.props.user.user.pk,
                coder.pk,
                this.state.cookie
              )
            }
          >
            Follow
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  renderCard() {
    return this.props.coders.map(coder => {
      const { name, role, exp } = coder;
      return (
        <Card key={name}>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://www0.sun.ac.za/chemistry/images/0/0b/Blank_avatar.jpeg"
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              Coder ID: <strong>{role}</strong>
            </Card.Meta>
            <Card.Description>
              Coder Email: <strong>{exp}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              {this.renderModal(coder)}
              <Button
                basic
                color="red"
                onClick={() =>
                  this.props.addContact(
                    this.props.user.user.pk,
                    coder.pk,
                    this.state.cookie
                  )
                }
              >
                Follow
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    });
  }
  renderCards() {
    if (this.props.coders) {
      return <Card.Group>{this.renderCard()}</Card.Group>;
    } else {
      return <div />;
    }
  }
  render() {
    return (
      <div>
        <h1>Coders</h1>
        <Container fluid style={{ marginTop: '3em' }}>
          {this.renderCards()}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ user, coders, currentCoderPortfolio }) => {
  return { user, coders, currentCoderPortfolio };
};

export default connect(mapStateToProps, {
  fetchCoders,
  setCurrentCoderPortfolio,
  addContact
})(CoderList);
