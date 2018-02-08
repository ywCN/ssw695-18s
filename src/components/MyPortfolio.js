import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { fetchPortfolio } from '../actions';

class MyPortfolio extends Component {
    componentWillMount() {
        this.props.fetchPortfolio();
    }
    render() {
        console.log(this.props);
        console.log(this.props);
        console.log(this.props);
        console.log(this.props);
        console.log(this.props);
        return (
            <div>
                {/* Dummy text */}
                <div>MyPortfolio</div>
                <div>MyPortfolio</div>
                <div>MyPortfolio</div>
                <div>MyPortfolio</div>
                <div>MyPortfolio</div>
                {/* Dummy text */}

                <div>
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
    }
}

const mapStateToProps = ({ current_user_portfolio }) => {
    return { current_user_portfolio };
};

export default connect(mapStateToProps, { fetchPortfolio })(MyPortfolio);
