import React from 'react';
import logo from './assets/Meza-logo.png';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Index from './components/pages/index';


function App() {
  return (
    <div className="App">
      <Nav />
      <Index/>
    <Footer/>
    </div>
  );
}

export default App;
