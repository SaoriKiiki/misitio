import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saori from './Sections/Saori';
import Logros from './Sections/Logros';
import Experiencia from './Sections/Experiencia';
import Educacion from './Sections/Educacion';
import Referencias from './Sections/Referencias';



class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
              <Saori />
              <Logros />
              <Experiencia />
              <Educacion />
              <Referencias />
          </nav>
      </div>

    );
  }
}

export default App;
