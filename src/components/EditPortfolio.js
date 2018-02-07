import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePortfolio } from '../actions';

class EditPortfolio extends Component {
    // TODO: render currentUser state in TextInput as init value
    render() {
        return (
            <div>
                EditPortfolio
                <Link
                    to="/myportfolio"
                    onClick={() => this.props.savePortfolio()}
                    className="waves-effect waves-light btn"
                >
                    save
                </Link>
            </div>
        );
    }
}

export default connect(null, { savePortfolio })(EditPortfolio);
