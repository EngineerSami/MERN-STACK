import React, { useState } from 'react';
import "../styles/searchFlights.css";

function SearchFlights() {
  const [activeTab, setActiveTab] = useState('popular');

  const flightsData = {
    popular: [
      "Flights from Tel Aviv-Yafo to London",
      "Flights from Tel Aviv-Yafo to Paris",
      "Flights from Tel Aviv-Yafo to Milan",
      "Flights from Tel Aviv-Yafo to New York",
      "Flights from Tel Aviv-Yafo to Barcelona",
      "Flights from Tel Aviv-Yafo to Rome",
      "Flights from Tel Aviv-Yafo to Athens",
      "Flights from Tel Aviv-Yafo to Frankfurt",
      "Flights from Tel Aviv-Yafo to Copenhagen",
      "Flights from Tel Aviv-Yafo to Madrid",
    ],
    otherCities: [
      "Flights from Istanbul to Dubai",
      "Flights from London to Madrid",
      "Flights from Berlin to Amsterdam",
      "Flights from Tokyo to Los Angeles",
      "Flights from Rome to New York",
      "Flights from Sydney to Singapore",
      "Flights from Dubai to Toronto",
      "Flights from Paris to Moscow",
      "Flights from Madrid to São Paulo",
      "Flights from Zurich to Bangkok",
    ],
    toTelAviv: [
      "Flights from London to Tel Aviv-Yafo",
      "Flights from Paris to Tel Aviv-Yafo",
      "Flights from New York to Tel Aviv-Yafo",
      "Flights from Berlin to Tel Aviv-Yafo",
      "Flights from Rome to Tel Aviv-Yafo",
      "Flights from Athens to Tel Aviv-Yafo",
      "Flights from Istanbul to Tel Aviv-Yafo",
      "Flights from Madrid to Tel Aviv-Yafo",
      "Flights from Vienna to Tel Aviv-Yafo",
      "Flights from Amsterdam to Tel Aviv-Yafo",
    ],
  };

  return (
    <>
      <div className="big-div">
        <h1>Search more flights</h1>
        <h6>More places to fly</h6>

        {/* Tabs */}
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            Popular destinations from Tel Aviv-Yafo
          </div>
          <div
            className={`tab ${activeTab === 'otherCities' ? 'active' : ''}`}
            onClick={() => setActiveTab('otherCities')}
          >
            Flights from other cities
          </div>
          <div
            className={`tab ${activeTab === 'toTelAviv' ? 'active' : ''}`}
            onClick={() => setActiveTab('toTelAviv')}
          >
            Flights to Tel Aviv-Yafo
          </div>
        </div>

        {/* Links based on active tab */}
        <div className="links">
          {flightsData[activeTab].map((flight, index) => (
            <div key={index}>
              <a href="#">{flight}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchFlights;
