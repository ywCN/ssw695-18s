import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>Dashboard</div>
            <div className="fixed-action-btn">
                <Link to="/AddProject" className="btn-floating btn-large red">
                    {/* icon names: http://materializecss.com/icons.html */}
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
