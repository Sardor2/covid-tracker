import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from "./pages/home-page/home-page.component";

class App extends React.Component  {
  
  render() {
    return (
        <div className="app">
          <Header />
          <HomePage />
        </div>
    );
  }
 
}

export default App;
