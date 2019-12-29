import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SpeedReadingContainer from "./components/SpeedReadingContainer";

class SpeedReading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ta-center">
                <Header />
                <SpeedReadingContainer />
                <Footer />
            </div>
        )
    }
}

export default SpeedReading;