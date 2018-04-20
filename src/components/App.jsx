import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

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
  render() {
    return (
      <BrowserRouter>
        <Container style={{ marginTop: '3em' }}>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/loginemailpassword" component={LoginEmailPassword} />
            <Route path="/signup" component={SignUp} />
            <Route path="/logout" component={Logout} />
            <Route path="/editportfolio" component={EditPortfolio} />
            <Route path="/myportfolio" component={MyPortfolio} />
            <Route path="/addproject" component={AddProject} />
            <Route path="/editproject" component={EditProject} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
