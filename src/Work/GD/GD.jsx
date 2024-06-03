import React from 'react';
import './GD.css';
import GD1 from '../GD/coctail.mp4';
import GD2 from '../GD/toto.mp4';
import GD3 from '../GD/Burger.mp4';
import GD4 from '../GD/new.MP4';
import GD5 from '../GD/Q1.mp4';
import GD6 from '../GD/OUR.mp4';
import GD7 from '../GD/food.mp4';


const GD = () => {
  return (
    <marque>
    <div id="works">
    <section class="carousel">
      <h2 class="categories__title">OUR WORK</h2>
      <div class="carousel__container">
        <div class="carousel-item">
          <video loop autoPlay muted
            class="carousel-item__img"
            src={GD2}
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">TOTO BAG PRAMOTION</h5>
            <h6 class="carousel-item__details--subtitle">STYLE ERA</h6>
          </div>
        </div>
        <div className="carousel-item">
          <video autoPlay loop muted
            className="carousel-item__img"
            src={GD1}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">COCKTAIL PRAMOTION</h5>
            <h6 className="carousel-item__details--subtitle">TERTTULIA GOA</h6>
          </div>
        </div>
        <div class="carousel-item">
          <video
            class="carousel-item__img"
            src={GD3} loop autoPlay muted
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">BURGER PRAMOTION</h5>
            <h6 class="carousel-item__details--subtitle">ROYAL BURGERS</h6>
          </div>
        </div>
        <div class="carousel-item">
          <video loop autoPlay muted
            class="carousel-item__img"
            src={GD4}
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">NEW YEAR STORY</h5>
            <h6 class="carousel-item__details--subtitle">B&S JEWELLERS</h6>
          </div>
        </div>
        <div class="carousel-item">
          <video loop autoPlay muted
            class="carousel-item__img"
            src={GD5}
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">INTRO REEL</h5>
            <h6 class="carousel-item__details--subtitle">DIGITAL MARKETING AGENCY</h6>
          </div>
        </div>
        <div class="carousel-item">
          <video loop autoPlay muted
            class="carousel-item__img"
            src={GD6}
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">PRAMOTIONAL REEL</h5>
            <h6 class="carousel-item__details--subtitle">DIGITAL MARKETING AGENCY</h6>
          </div>
        </div>

        <div className="carousel-item">
          <video loop autpPlay muted
            className="carousel-item__img"
            src={GD7}
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">BLOG PRAMOTIONAL REEL</h5>
            <h6 class="carousel-item__details--subtitle">THE NUMBER NEWS</h6>
          </div>
        </div>
      </div>
    </section>
      
    </div>
    </marque>
  );
}

export default GD;
