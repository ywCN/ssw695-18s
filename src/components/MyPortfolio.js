import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// TODO: import fetchPortfolio action and use it in ComponentWillMount

const MyPortfolio = () => {
    // TODO: fetch current user info and display info
    // can just display name and email for now
    return (
        <div>
            <div>MyPortfolio</div>
            <div>
                {/* <Link
                    to="/editportfolio"
                    onClick={() => console.log('Edit Portfolio clicked')}
                    className="waves-effect waves-light btn"
                >
                    Edit Portfolio
                </Link>
                <Link
                    to="/addproject"
                    onClick={() => console.log('Edit Portfolio clicked')}
                    className="waves-effect waves-light btn"
                >
                    Add Project
                </Link> */}
                <Button
                    primary
                    as={Link}
                    to="/editportfolio"
                    onClick={() => console.log('Edit Portfolio clicked')}
                >
                    Edit Portfolio
                </Button>
                <Button
                    secondary
                    as={Link}
                    to="/addproject"
                    onClick={() => console.log('Add Project clicked')}
                >
                    Add Project
                </Button>
            </div>
        </div>
    );
};

export default MyPortfolio;
