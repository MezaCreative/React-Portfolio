import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/Meza-logo.png';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Index from './components/pages/Index';
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Switch>
          <Route exact path={["/", "/index"]}>
              <Index/>
          </Route>
          <Route exact path={["/portfolio", "/portfolio"]}>
                <Portfolio/>
          </Route >

          <Route exact path={["/contact", "/contact"]}>
                <Contact/>
          </Route>

        </Switch>
            
      </div>


    <Footer/>
    </div>
  );
}

export default App;
