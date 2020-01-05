import React, { Component } from 'react';
import { FOOTER as footer } from './constant';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <p>{footer}</p>
            </footer>
        )
    }
}

export default Footer;