import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FacebookLogin from './FacebookLogin';

class Header extends Component {
    renderLoginLogout() {
        if (this.props.user) {
            return <a onClick={() => console.log('logout')}>logout</a>;
        } else {
            return <FacebookLogin />;
        }
    }

    renderHeaderLeftLogo() {
        if (this.props.user) {
            return (
                <Link
                    to={'/dashboard'}
                    className="left brand-logo"
                    onClick={() => console.log('logo clicked while logged in')}
                >
                    CoderIn
                </Link>
            );
        } else {
            return (
                <Link
                    to={'/'}
                    className="left brand-logo"
                    onClick={() => console.log('logo clicked while logged out')}
                >
                    CoderIn
                </Link>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderHeaderLeftLogo()}
                    <ul id="nav-mobile" className="right">
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

function mapStateToProps({ user }) {
    console.log(user);
    return { user };
}

export default connect(mapStateToProps)(Header);
