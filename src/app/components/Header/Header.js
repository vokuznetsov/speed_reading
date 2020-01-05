import React from 'react';
import { SPEED_READING_HEADER as header } from './constant'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mt-3">
                <h1>{header}</h1>
            </header>
        )
    }
}

export default Header;