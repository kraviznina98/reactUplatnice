import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pocetna from './components/Pocetna';
import Istorija from './components/Istorija';
function App() {
  const [racuni, setRacuni] = useState([]);

  const kreirajRacun = (r) => {
    setRacuni(prev => {
      return [...prev, r];
    })
  }
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/istorija'>
          <Istorija racuni={racuni} />
        </Route>
        <Route path='/'>
          <Pocetna kreirajRacun={kreirajRacun} ukupno={racuni.reduce((prev, element) => {
            return prev + parseInt(element.iznos);
          }, 0)} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
