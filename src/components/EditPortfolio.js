import React from 'react';
// TODO: import savePortfolio action and use it in 'save' button

const EditPortfolio = () => {
    // TODO: render currentUser state in TextInput as init value
    return (
        <div>
            EditPortfolio
            {/* TODO: savePortfolio action callback in the button*/}
            <div
                className="waves-effect waves-light btn"
                onClick={() => console.log('save button clicked')}
            >
                save
            </div>
        </div>
    );
};

export default EditPortfolio;
