import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import MyPortfolio from './MyPortfolio';
import AddProject from './AddProject';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyArwzscOXTvs4F0m_-4jX-xZOi9RVKJCcs',
            authDomain: 'ssw695-18s.firebaseapp.com',
            databaseURL: 'https://ssw695-18s.firebaseio.com',
            projectId: 'ssw695-18s',
            storageBucket: '',
            messagingSenderId: '282335465798'
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // call action to set login state
            } else {
                // call action to set login state
            }
        });
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        {/* Header will always display because it is not in Route. */}
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route
                            exact
                            path="/myportfolio"
                            component={MyPortfolio}
                        />
                        <Route
                            exact
                            path="/myportfolio/addproject"
                            component={AddProject}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
