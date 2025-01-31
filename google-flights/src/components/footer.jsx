import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/footer.css";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <div className="footer">
      <div className='content'>
        <div className="options">
          <div><i className="fas fa-globe"></i> Language · English (United Kingdom)</div>
          <div><i className="fas fa-map-marker-alt"></i> Location · Palestine</div>
          <div><i className="fas fa-money-bill-wave"></i> Currency · JOD</div>
        </div>
        <div className="info">
          Current language and currency options applied: English (United Kingdom) - Palestine - JOD<br />
          Displayed currencies may differ from the currencies used to purchase flights. <a href="#" className="learn-more">Learn more</a>
        </div> 
        <div className="info">
          Prices are final and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of payment, luggage, meals, WLAN or other additional services. Prices, availability and travel details are provided based on the latest information received from our partners. This information is reflected in the results within a period of less than 24 hours. Additional conditions may also be applied by our partners. You should then check prices and conditions with the services providers before booking.
        </div>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Join user studies</a>
          <a href="#">Feedback</a>
          <a href="#">Help Centre</a>
        </div>
      </div>
      <div className="dropdowns">
        <div>International sites <i className="fas fa-chevron-down"></i></div>
        <div>Explore flights <i className="fas fa-chevron-down"></i></div>
      </div>
    </div>
  );
}

export default Footer;
