import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth){
            case null:
                return 'Still deciding';
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (
                    <li><a href="/api/logout">Log Out</a></li>
                );
        }
    }

    render() {
        return (
            <div>
                 <nav>
                    <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys': '/'} 
                        className="brand-logo"
                    >Emaily
                    </Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                </ul>
            </div>
        )
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Header);