import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import me from "./assets/tilaAndI4.jpg" 

function index() {
      return (
        <div className="container">
          {/*Box*/}
          <div className="card">
            <div className="row section-background">
              <img src={me} className="tila" alt="Tila and I"  />
              <div className="content-wrapper">
                <p className="col over-text">
                  Hey! I'm Esteban. <br />
                  This is Tila. <br />
                </p>
                <p className="col under-text">
                  Welcome to<br />
                  my page.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/*Heading*/}
            <div className="col-md-12">
              <h1>More About Me</h1>
            </div>
          </div>
          {/*Photo and text*/}
          <div className="row">
            <div className="col body-text">
              <p>
                Hey there! My name is Esteban Meza, thanks for looking at my page. I
                am a fullstack junior developer eagerly looking for new opportunies
                in the Columbus Tech industry. I'm Covid-19 Graduate from The Ohio
                State University with a major in Communication Technologies focused
                in User Experience (UX) and Social Media. I also have a minor in
                Spanish.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col body-text">
              <p>
                I have experience in Customer Service, Food Service, Social Media
                Marketing, Data Analytics, User Experience, User Design, Object
                Oriented Programming with Java, and fullstack development.
                <br />
                My hobbies include playing soccer, disc golf, drinking bourbon,
                going out with the boys, and managing various social media pages.
                Here is an example --&gt;
                <a href="https://www.facebook.com/freshmemesfb"> Fresh Memes</a>
              </p>
            </div>
          </div>
        </div>
      );
    };

  export default index;