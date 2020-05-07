import React from 'react';
import Ipod from '../ipod/Ipod';
import classes from './App.module.css';


const App = () => {
  console.log('App RENDER');
  
  return (
    <div className={classes.App}>
      <Ipod />
    </div>
  );
};
export default App;