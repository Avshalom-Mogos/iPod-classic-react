import * as React from 'react';
import Ipod from '../ipod/Ipod';
import classes from './App.module.css';


const App: React.FC<{}> = () => {
  return (
    <div className={classes.app}>
      <Ipod />
    </div>
  );
};

export default App;
