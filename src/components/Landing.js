import React from 'react';

import Login from './Login';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>CoderIn!</h1>
                Find smartest coders!
            </div>
            <Login />
        </div>
    );
};

export default Landing;
