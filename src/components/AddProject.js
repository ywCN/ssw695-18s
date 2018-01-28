import React from 'react';

const AddProject = () => {
    return (
        <div>
            <div>AddProject</div>
            <div
                className="waves-effect waves-light btn"
                onClick={() => {
                    this.props.savePortfolio();
                    console.log('save button clicked');
                }}
            >
                save
            </div>
        </div>
        // TODO: add saveProject action callback
    );
};

export default AddProject;
