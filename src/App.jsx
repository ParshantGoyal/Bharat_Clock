import './App.css';
import Appname from './components/Appname';
import ClockOutput from './components/ClockOutput';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Appname/>
      <br></br>
      <ClockOutput/>
       
    </div>
  );
}

export default App;
