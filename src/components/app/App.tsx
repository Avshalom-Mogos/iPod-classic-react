import * as React from 'react';
import Ipod from '../ipod/Ipod';
import classes from './App.module.css';
import { getPublicImagePath } from '../../utils';


const App: React.FC<{}> = () => {
  return (
    <div className={classes.app}>
      <div 
        className={classes.appBackground}
        style={{ backgroundImage: `url(${getPublicImagePath('/images/background.jpg')})` }}
      />
      <Ipod />
    </div>
  );
};

export default App;
