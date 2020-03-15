import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Explore from './component/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={props => <Explore {...props} />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;