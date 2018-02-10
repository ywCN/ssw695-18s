import React from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';
// import GGLogin from './GGLogin';
// import LILogin from './LILogin';
// import GHLogin from './GHLogin';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>CoderIn!</h1>
                Find smartest coders!
            </div>
            <Segment padded>
                <Button as={FBLogin} color="blue" fluid />
                <Divider horizontal>Or</Divider>
                {/* <Button color="red" fluid> */}
                {/* </Button> */}
                {/* <Divider horizontal>Or</Divider> */}
                <Button color="black" fluid>
                    Sign Up Now
                </Button>
            </Segment>
        </div>
    );
};

export default Landing;
