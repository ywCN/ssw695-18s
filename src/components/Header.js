import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// TODO: import login and logout action and use them as the callbacks on login and logout buttons

class Header extends Component {
    // TODO: render a button, the rendered button is determined by the auth state
    renderContent() {
        if (this.props.auth) {
            // return button with login callback
        } else {
            // return button with logout callback
        }
    }

    render() {
        return (
            //http://materializecss.com/navbar.html
            <nav>
                <div className="nav-wrapper">
                    <Link
                        // to={this.props.auth ? '/surveys' : '/'}
                        to={'/'}
                        className="left brand-logo"
                    >
                        CoderIn
                    </Link>
                    {/* <div className="right">{this.renderContent()}</div> */}
                    <div className="right">{'login/logout'}</div>
                </div>
            </nav>
        );
    }
}
export default Header;

// function mapStateToProps({ auth }) {
//     return { auth };
// }

// TODO: subscribe to the auth state

// export default connect(mapStateToProps)(Header);
