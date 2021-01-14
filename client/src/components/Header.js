import React, { Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                 <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/auth/google">Login With Google</a></li>
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

export default Header;