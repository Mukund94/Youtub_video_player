import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import youtube from './youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
 
          
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is a youtube videos
          </h2>
         
      </div>
  <div className="youtube">Hi Welcome to Songs Park</div>
  <div className="youtube1"> <iFrame width="560" height="315" src="https://www.youtube-nocookie.com/embed/DS-raAyMxl4?list=RDQM5Xvjbjuiugc" frameBorder="0" allowFullScreen></iFrame>
    </div>
    <youtube/>
  
       </div>
    );
  }
}


export default App;
