import React from 'react';
import { Link } from 'react-router-dom';
// TODO: import fetchPortfolio action and use it in ComponentWillMount

const MyPortfolio = () => {
    // TODO: fetch current user info and display info
    // can just display name and email for now
    return (
        <div>
            MyPortfolio
            <div className="fixed-action-btn">
                {/* This is the add project button. */}
                <Link to="/AddProject" className="btn-floating btn-large red">
                    {/* icon names: http://materializecss.com/icons.html */}
                    <i className="material-icons">add</i>
                </Link>
            </div>
            {/* TODO: add an edit button with callback Link to edituserportfolio*/}
        </div>
    );
};

export default MyPortfolio;
