import React from 'react';
import FacebookLogin from './FacebookLogin';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>CoderIn!</h1>
                Find smartest coders!
            </div>
            <FacebookLogin />
        </div>
    );
};

export default Landing;
