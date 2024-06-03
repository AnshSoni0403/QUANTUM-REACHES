import React from 'react';
import './portfolio.css';
import Navbar from '../Components/Navbar/Navbar';
import Work from '../Portfolio/work.mp4';
import GDwork from '../Work/GD/GD';
import Clients from '../Work/clients/clients';
import Offer from '../Work/offerings/offerings';
import Footer2 from '../Work/footer2/footer2';
const portfolio = () => {
  return (
    <div id="Portfolio">
    <Navbar />
    
        <video className="v" src={Work} loop autoPlay muted></video>
        <GDwork />
        <Offer/>
        <Clients/>
        <Footer2/>
      
      
    </div>
  );
}

export default portfolio;
