import React from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>CoderIn!</h1>
                Find smartest coders!
            </div>
            <FBLogin />
            <Segment padded>
                <Button primary fluid>
                    <FBLogin />
                </Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>
                    Sign Up Now
                </Button>
            </Segment>
        </div>
    );
};

export default Landing;
