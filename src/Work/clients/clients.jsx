import React from 'react';
import './clients.css';
import logo1 from './styleLogo.jpg';
import logo2 from './number.jpg';

const Clients = () => {
  return (
    <div id="bakre">
    <div>
       <h1 class="gradient-heading">Our Clients:</h1>
    </div>
    <div className='top'>
    <div className="box">
      <div className="box-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
      </div>
      <div className="box-label">STYLE ERA FASHION BOUTIQUE</div>
      <div className="box-title">A FASHION DESIGN STUDIO ✨</div>
      <div className="box-image">
        <img src={logo1} alt="" />
      </div>
      <div className="studio-button">
        <div className="studio-button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
        </div>
        <a href="https://www.instagram.com/style_era_fashionboutique?igsh=MWV4eGlhenQ4bGhvcg=="><div className="studio-button-label">
          Open Account
        </div></a>
      </div>
      </div>

      
      
    </div>
    {/* 2 */}
    <div className='top2'>
    <div className="box">
      <div className="box-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
      </div>
      <div className="box-label">THE NUMBER NEWS</div>
      <div className="box-title">BLOG WRITING FIRM ✨</div>
      <div className="box-image">
        <img src={logo2} alt="" />
      </div>
      <div className="studio-button2">
        <div className="studio-button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
        </div>
        <a href="https://www.linkedin.com/company/thenumbernews"><div className="studio-button-label">
          Open Account
        </div></a>
      </div>

      
      
    </div>
    </div>
    
    

      
        
          
          
          
    </div>
  );
}

export default Clients;
