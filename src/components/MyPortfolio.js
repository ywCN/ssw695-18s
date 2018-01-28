import React from 'react';
import { Link } from 'react-router-dom';
// TODO: import fetchPortfolio action and use it in ComponentWillMount

const MyPortfolio = () => {
    // TODO: fetch current user info and display info
    // can just display name and email for now
    return (
        <div>
            <div>MyPortfolio</div>
            <div>
                <Link
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
                </Link>
            </div>
        </div>
    );
};

export default MyPortfolio;
