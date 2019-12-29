import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import Navbar from "./components/Navbar/Navbar";
import SpeedReading from "./module/SpeedReading/SpeedReading"
import speedReading from './main/speed_reading.js'


ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<SpeedReading />, document.getElementById('root'));

speedReading();