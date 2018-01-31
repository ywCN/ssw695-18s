import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderHeaderRight() {
        if (this.props.user) {
            return (
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to={'/myportfolio'} className="right">
                            myportfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/logout'}
                            className="right"
                            onClick={() => {
                                console.log('logout clicked');
                            }}
                        >
                            logout
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    renderHeaderLeft() {
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
                    {this.renderHeaderLeft()}
                    {this.renderHeaderRight()}
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
