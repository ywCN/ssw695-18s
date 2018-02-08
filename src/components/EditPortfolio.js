import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePortfolio } from '../actions';
import { Button, Icon } from 'semantic-ui-react';

class EditPortfolio extends Component {
    // TODO: render currentUser state in TextInput as init value
    render() {
        return (
            <div>
                <div>EditPortfolio</div>
                <div>EditPortfolio</div>
                <div>EditPortfolio</div>
                <div>EditPortfolio</div>
                <div>EditPortfolio</div>
                <Button
                    animated
                    as={Link}
                    to="/myportfolio"
                    onClick={() => this.props.savePortfolio()}
                >
                    <Button.Content visible>Save</Button.Content>
                    <Button.Content hidden>
                        <Icon name="right arrow" />
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default connect(null, { savePortfolio })(EditPortfolio);
