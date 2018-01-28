import React from 'react';
import { Link } from 'react-router-dom';

const AddProject = () => {
    return (
        <div>
            <div>AddProject</div>
            <div>
                <Link
                    to="/myportfolio"
                    onClick={() => console.log('add clicked')}
                    className="waves-effect waves-light btn"
                >
                    add
                </Link>
            </div>
        </div>
        // TODO: add saveProject action callback
    );
};

export default AddProject;
