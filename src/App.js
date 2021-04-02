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
    <Router
      basename="/react-portfolio">
       <div className="App">
          <Nav />
              <div>
                <Switch>
                      
                     <Route exact path={["/", "/index"]}>
                           <Index/>
                       </Route>
                       <Route exact path={["/index", "/index"]}>
                           <Index/>
                       </Route>
                       <Route exact path={["portfolio", "/index"]}>
                           <Portfolio/>
                        </Route >
                       <Route exact path={["/contact", "/index"]}>
                           <Contact/>
                         </Route>
                  </Switch>        
                </div>
           <Footer/>
         </div>
      </Router>
  );
}

export default App;
