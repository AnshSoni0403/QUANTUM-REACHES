import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <ul className="cards5">
          <li className="card cards__item">
            <div className="card__frame">
              <div className="card__picture">
                <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120" />
              </div>
              <h2 className="card__title2">Graphic Designing</h2>
            </div>
            <div className="card__overlay2"></div>
            <div className="card__content2">
              <h2>Design</h2>
              <p>Graphic design plays a crucial role in digital marketing by enhancing the visual appeal and effectiveness of marketing materials. Here are several ways graphic design can be used in digital marketing</p>
            </div>
          </li>
          <li className="card cards__item">
            <div className="card__frame">
              <div className="card__picture">
                <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120" />
              </div>
              <h2 className="card__title2">Content Writing</h2>
            </div>
            <div className="card__overlay2"></div>
            <div className="card__content2">
              <h2>Content Writing</h2>
              <p>Content writing in digital marketing is like the glue that holds everything together. It boosts SEO, engages audiences, and builds brand credibility. From social media posts to blog articles, compelling content drives results and fosters meaningful connections with your audience.



</p>
            </div>
          </li>
          <li className="card cards__item">
            <div className="card__frame">
              <div className="card__picture">
                <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
              </div>
              <h2 className="card__title2">UI/UX WEB DESIGN</h2>
            </div>
            <div className="card__overlay2"></div>
            <div className="card__content2">
              <h2>UI/UX</h2>
              <p>UI/UX design in web development focuses on creating visually appealing, intuitive interfaces that enhance user experience. It plays a vital role in making websites easy to navigate, reflecting brand identity, and optimizing for accessibility and responsiveness. </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
