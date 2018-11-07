import React, { Component } from 'react';
import Main from './Main';
import Intro from './Intro';
import { Provider } from 'react-redux';
import store from './redux/store';



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Intro />
          <Main />
        </div>
      </Provider>
    );
  }

}



export default App;
