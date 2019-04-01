import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Game';
import Game from './Components/Game';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './Reducers';
import TodoApp from './Components/TodoApp';

const store = createStore(rootReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Game />
            <TodoApp />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
