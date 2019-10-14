import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector';
import Circles from './Components/Circles/Circles';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1
    };
  }

  handleChange = (circleNum) => {
    this.setState({selectedCircle: circleNum})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleChange={this.handleChange}
          />
          <Circles 
            selectedCircle={this.state.selectedCircle}
          />
        </main>
      </div>
    );
  }
}

export default App;

