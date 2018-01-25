import React, { Component } from 'react';
import firebase from 'firebase';

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
    }
    render() {
        return <div>Hello</div>;
    }
}

export default App;
