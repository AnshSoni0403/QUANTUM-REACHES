import React from 'react';
import './footer2.css';
import insta from './insta logo.png';
import mail from './mail.png';

const Footer2 = () => {
  return (
    <div className='f2'>
      <footer className="footer">
        {/* <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div> */}
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com/quantum_reaches/">
              <img src={insta} className="social2" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="quantumreaches@gmail.com">
              <img src={mail} className='social3'/>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="./landing">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="./landing">Brochure</a></li>
          <li className="menu__item"><a className="menu__link" href="#kaam">Services</a></li>
          <li className="menu__item"><a className="menu__link" href="#bakre">Clients</a></li>
          <li className="menu__item"><a className="menu__link" href="./landing">Contact</a></li>
        </ul>
        <p>&copy;2024 Quantum Reaches | All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default Footer2;
