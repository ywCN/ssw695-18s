import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePortfolio } from '../actions';
// TODO: import savePortfolio action and use it in 'save' button

class EditPortfolio extends Component {
    // TODO: render currentUser state in TextInput as init value
    render() {
        return (
            <div>
                EditPortfolio
                {/* TODO: savePortfolio action callback in the button*/}
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
        );
    }
}

export default connect(null, { savePortfolio })(EditPortfolio);
