import React from 'react';
import './Landing.css';
import logo from './logo.png';
import Navbar from '../Navbar/Navbar';
import introduction from '../Landing/introduction.mp4';
import Services from '../Services/Services';
import Aspects from '../Aspects/Aspects';
import Brocure from '../Brochure/Brouchure';
import Footer from '../Footer/footer';



const Landing = () => {
  return (
    <div id="home">
      <div className="background-container">
        <Navbar />
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon" /> */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className='logo'>
          {/* <img src={logo} className='logo'></img> */}
        </div>
        <video className="introduction-video" src={introduction} loop autoPlay muted></video>
      </div>
      <Services />
      <Aspects />
      <Brocure />
      <Footer/>
    </div>
  );
}

export default Landing;
