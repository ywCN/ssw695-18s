import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCoders } from '../../actions';

class CoderList extends Component {
    // componentDidMount() {
    //     this.props.fetchCoders();
    // }
    renderCoders() {}
    render() {
        // return <div>{this.renderCoders()}</div>;
        return (
            <div>
                <div>Coder1</div>
                <div>Coder2</div>
                <div>Coder3</div>
                <div>Coder4</div>
            </div>
        );
    }
}

// function mapStateToProps({ coders }) {
//     return { coders };
// }

export default CoderList;

// export default connect(mapStateToProps, { fetchCoders })(CoderList);
