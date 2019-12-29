import React from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SpeedReadingContainer from "./components/SpeedReadingContainer";

class SpeedReading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ margin: '0%' }}>
                <Navbar />
                <div className="container ta-center">
                    <Header />
                    <SpeedReadingContainer />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SpeedReading;