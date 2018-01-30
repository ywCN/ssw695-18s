import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// TODO: import login and logout action and use them as the callbacks on login and logout buttons

class Header extends Component {
    // TODO: render a button, the rendered button is determined by the auth state
    renderLoginLogout() {
        if (this.props.auth) {
            return <a onClick={() => console.log('login')}>login</a>;
        } else {
            return <a onClick={() => console.log('logout')}>logout</a>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'} className="left brand-logo">
                        CoderIn
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to={'/myportfolio'} className="right">
                                myportfolio
                            </Link>
                        </li>
                        <li>{this.renderLoginLogout()}</li>
                    </ul>
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
