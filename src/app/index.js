import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import SpeedReading from "./module/SpeedReading/SpeedReading"
import speedReading from './main/speed_reading.js'


ReactDOM.render(<SpeedReading />, document.getElementById('root'));

speedReading();