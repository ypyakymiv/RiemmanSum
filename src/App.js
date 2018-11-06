import React, { Component } from 'react';
import './App.css';
import Graph from './Graph';
import MathInput from './MathInput';
import Sliders from './Sliders';
import { Provider } from 'react-redux';
import store from './redux/store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Graph />
          <MathInput />
          <Sliders />
        </div>
      </Provider>
    );
  }

}

export default App;
