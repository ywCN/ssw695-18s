import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import AppHeader from './AppHeader';
import Landing from './Landing';
import Dashboard from './Dashboard';
import MyPortfolio from './MyPortfolio';
import AddProject from './AddProject';
import LoginEmailPassword from './LoginEmailPassword';
import Logout from './Logout';
import EditPortfolio from './EditPortfolio';
import EditProject from './EditProject';
import SignUp from './SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      cookie: cookies.get('loginStatus')
    };
  }
  render() {
    const content =
      this.state.cookie === 'ok' ? (
        <Container style={{ marginTop: '3em' }}>
          <AppHeader />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/loginemailpassword"
            component={LoginEmailPassword}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/editportfolio" component={EditPortfolio} />
          <Route exact path="/myportfolio" component={MyPortfolio} />
          <Route exact path="/addproject" component={AddProject} />
          <Route exact path="/editproject" component={EditProject} />
        </Container>
      ) : (
        <Container style={{ marginTop: '3em' }}>
          <AppHeader />
          <Landing />
        </Container>
      );
    return <BrowserRouter>{content}</BrowserRouter>;
  }
}

export default App;
