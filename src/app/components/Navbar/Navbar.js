import React from 'react';
import { NAVBAR_ITEMS as items } from './constant';
import logo from '../../../resources/speeder.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navbar_items = items.map((value, index) => {
            return <li className="nav-item" key={index}>
                <Link className="nav-link" to={value.url}>{value.name}</Link>
            </li>
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} className="br-rad-6" width="35" height="35" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {navbar_items}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;