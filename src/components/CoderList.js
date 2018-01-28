import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCoders } from '../../actions';

class CoderList extends Component {
    // componentDidMount() {
    //     this.props.fetchCoders();
    // }
    renderCoders() {}
    render() {
        return <div>{this.renderCoders()}</div>;
    }
}

// function mapStateToProps({ coders }) {
//     return { coders };
// }

export default CoderList;

// export default connect(mapStateToProps, { fetchCoders })(CoderList);
