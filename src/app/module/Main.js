import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SpeedReading from "./SpeedReading/SpeedReading";
import ContactUs from "./Contact/ContactUs";
import About from "./About/About";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ margin: '0%' }}>
                <Router>
                    <Navbar />

                    <div className="container ta-center">
                        <Header />
                        <Switch>
                            <Route path="/contact" component={ContactUs}></Route>
                            <Route path="/about" component={About}></Route>
                            <Route path={"/" || "/home"} component={SpeedReading}></Route>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;