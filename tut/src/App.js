import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom/Route';
import HomePage from './components/pages/homePage/HomePage';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} /> 
    </div>
  );
}

export default App;
