import React from 'react';
import { NAVBAR_ITEMS as items } from './constant';
import logo from '../../../resources/speeder.jpg';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navbar_items = items.map((value, index) => {
            return <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{value}</a>
            </li>
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img className="br-rad-6" src={logo} width="35" height="35" alt=""></img>
                </a>

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