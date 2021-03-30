import React from 'react';
import './style.css';

const Footer = () => (
    <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            {/*Column1*/}
            <div className="footer-pad">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li><a href="#" /></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Follow Me</h4>
            <ul className="social-network social-circle">
              <li>
                <a href="https://github.com/MezaCreative" className="icoGithub" title="Github"><i className="fa fa-github" /></a>
              </li>
              <li />
              <li>
                <a href="https://www.facebook.com/esteban.meza.52/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/esteban-meza-b43885a4/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/estebanmeza/" className="icoInstagram" title="Instagram"><i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Estebean__" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">
              © Copyright 2021 - Meza Creative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;