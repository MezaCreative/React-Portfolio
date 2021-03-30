import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cardcontainer from './components/Cardcontainer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Cardcontainer/>

    <Footer/>
    </div>
  );
}

export default App;
