import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import SpeedReading from "./module/SpeedReading/SpeedReading"
import SpeedReadingPreparation from './main/SpeedReadingPreparation'


ReactDOM.render(<SpeedReading />, document.getElementById('root'));

const spPreparation = new SpeedReadingPreparation();
spPreparation.speedReading();