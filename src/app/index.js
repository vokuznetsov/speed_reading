import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import './main/speed_reading.js'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";


ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Header />, document.getElementById('header'));