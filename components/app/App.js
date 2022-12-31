import * as React from 'react';
import Ipod from '../ipod/Ipod';
import classes from './App.module.css';
var App = function () {
    return (React.createElement("div", { className: classes.app },
        React.createElement(Ipod, null)));
};
export default App;
