import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/midpage.css";

const MidPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [tripType, setTripType] = useState("Round trip");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleDepartureChange = (e) => {
    setDepartureDate(e.target.value);
    // Ensure return date is not before departure date
    if (returnDate && e.target.value > returnDate) {
      setReturnDate(e.target.value);
    }
  };

  return (
    <>
      <div className="container">
        <img
          className="background-image"
          src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg"
          alt="Background"
        />
        <div className="title">Flights</div>
      </div>

      <div className="search-container" onClick={() => setOpenDropdown(null)}>
        <div style={{ display: "flex" }}>
          <div className="dropdown">
            <button onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "trip" ? null : "trip"); }}>
              <i className="fas fa-exchange-alt"></i> {tripType} <i className="fas fa-caret-down"></i>
            </button>
            {openDropdown === "trip" && (
              <div className="dropdown-content">
                {["Round trip", "One way", "Multi-city"].map((type) => (
                  <button key={type} onClick={() => { setTripType(type); setOpenDropdown(null); }}>
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "passengers" ? null : "passengers"); }}>
              <i className="fas fa-user"></i> {passengers} <i className="fas fa-caret-down"></i>
            </button>
            {openDropdown === "passengers" && (
              <div className="dropdown-content" style={{ display: "flex", gap: "30px" }}>
                <button onClick={() => setPassengers((prev) => Math.max(1, prev - 1))} style={{ width: "50px" }}>-</button>
                <p>{passengers}</p>
                <button onClick={() => setPassengers((prev) => prev + 1)} style={{ width: "50px" }}>+</button>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "class" ? null : "class"); }}>
              {classType} <i className="fas fa-caret-down"></i>
            </button>
            {openDropdown === "class" && (
              <div className="dropdown-content">
                {["Economy", "Premium Economy", "Business", "First Class"].map((type) => (
                  <button key={type} onClick={() => { setClassType(type); setOpenDropdown(null); }}>
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="search-option">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Where from?" />
          </div>

          <div className="search-option">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Where to?" />
          </div>

          <div className="search-option">
            <i className="fas fa-calendar-alt"></i>
            <input
              type="date"
              value={departureDate}
              onChange={handleDepartureChange}
              min={today} 
            />
          </div>

          <div className="search-option">
            <i className="fas fa-calendar-alt"></i>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={departureDate || today} 
              disabled={tripType === "One way"}
            />
          </div>
        </div>
      </div>

      <button className="explore-button">
        <i className="fas fa-search"></i>
        <span>Explore</span>
      </button>
    </>
  );
};

export default MidPage;
