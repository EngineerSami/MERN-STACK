import React, { useState, useEffect } from 'react';

const GeoCountry = () => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(null);
  const [currenciesFull, setCurrenciesFull] = useState(null);
  const [currenciesCode, setCurrenciesCode] = useState(null);
  const [languages, setLanguages] = useState(null);

  // Fetch geolocation data (country, city, region)
  const fetchGeoData = () => {
    fetch('https://ipinfo.io/json')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country);
        setCity(data.city);
        setRegion(data.region);
      })
      .catch(() => {
        setError('Failed to fetch country data.');
      });
  };

  // Fetch flag, currencies, and languages
  const fetchCountryDetails = (countryCode) => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0]; // Extract country data from response
        setFlag(countryData.flags?.png || null); // Set flag

        // Extract ILS and JOD currencies if available
        const availableCurrencies = countryData.currencies || {};
        const selectedCurrencies = ['ILS'].filter(code => availableCurrencies[code]); // Check existence

        // Full currency name with symbol
        const currenciesWithSymbols = selectedCurrencies
          .map(code => `${availableCurrencies[code].name} (${availableCurrencies[code].symbol})`)
          .join(', ');

        // Currency codes only
        const currenciesOnlyCodes = selectedCurrencies.join(', ');

        setCurrenciesFull(currenciesWithSymbols || 'Not Available');
        setCurrenciesCode(currenciesOnlyCodes || 'Not Available');

        setLanguages(countryData.languages ? Object.values(countryData.languages).join(', ') : 'N/A');
      })
      .catch(() => {
        setError('Failed to fetch country details.');
      });
  };

  // Fetch geolocation data when the component mounts
  useEffect(() => {
    fetchGeoData();
    const intervalId = setInterval(() => {
      fetchGeoData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Fetch country details when country code is available
  useEffect(() => {
    if (country) {
      fetchCountryDetails(country);
    }
  }, [country]);

  return (
    <div>
      <h1>Geolocation Information</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {country ? (
        <div>
          <p><strong>Country:</strong> {country}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Currencies (Full):</strong> {currenciesFull}</p>
          <p><strong>Currencies (Codes):</strong> {currenciesCode}</p>
          <p><strong>Languages:</strong> {languages}</p>
          {flag && <img src={flag} alt={`${country} flag`} style={{ width: '100px', marginTop: '10px' }} />} 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeoCountry;
