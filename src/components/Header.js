import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (false) {
            // switch (this.props.auth) {
            case null:
                return; // show nothing if not sure
            case false:
                return (
                    <li>
                        <a href="/auth">Login</a>
                    </li>
                );
            default:
                return [
                    <li key="1">lol</li>,
                    <li key="2">
                        {/* <a href="/api/logout">Logout</a> */}
                        emmm
                    </li>
                ];
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
                </div>
            </nav>
        );
    }
}
export default Header;
