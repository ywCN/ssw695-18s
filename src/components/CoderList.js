import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoders } from './../actions';

class CoderList extends Component {
    componentWillMount() {
        this.props.fetchCoders();
    }
    renderCoders() {
        if (this.props.coders) {
            return this.props.coders.map(coder => {
                // TODO: use coder.id instead of coder
                return <div key={coder}>coder</div>;
            });
        } else {
            console.log(this.props.coders);
            return <div />;
        }
    }
    render() {
        return <div>{this.renderCoders()}</div>;
    }
}

function mapStateToProps({ coders }) {
    return { coders };
}

export default connect(mapStateToProps, { fetchCoders })(CoderList);
