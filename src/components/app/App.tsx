import * as React from 'react';
import Ipod from '../ipod/Ipod';
import classes from './App.module.css';


const App: React.FC<{}> = () => {
  return (
    <div className={classes.app}>
      <div 
        className={classes.appBackground}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}
      />
      <Ipod />
    </div>
  );
};

export default App;
