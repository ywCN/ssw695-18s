import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// TODO: import login and logout action and use them as the callbacks on login and logout buttons

class Header extends Component {
    // TODO: render a button, the rendered button is determined by the auth state
    renderContent() {
        if (this.props.auth) {
            return <a onClick={() => console.log('logout')}>logout</a>;
        } else {
            return <a onClick={() => console.log('login')}>login</a>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'} className="left brand-logo">
                        CoderIn
                    </Link>
                    {/* <div className="right">{this.renderContent()}</div> */}
                    <Link
                        to={'/myportfolio'}
                        className="right"
                        style={{ marginLeft: 30 }}
                    >
                        myportfolio
                    </Link>
                    <div className="right">{this.renderContent()}</div>
                </div>
            </nav>
        );
    }
}
// export default Header;

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
