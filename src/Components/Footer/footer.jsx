import React from 'react';
import './footer.css';
import logo from './logo.png';
import insta from './insta.png';
import linkedin from './linkedin.png';
const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    {/* <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>6354-725343</span><br/>
                    <span>93168-55265</span><br/>
                    <span>6353-034256</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>quantumreaches@gmail.com
</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                  </div>
                  
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.instagram.com/quantum_reaches/"><img src={insta} className="insta"></img></a>
                    {/* <a href="#"><img src={linkedin} className="linkedin"></img></a> */}
                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Hire us! </h3>
                  </div>
                  
                  <div className="subscribe-form">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
