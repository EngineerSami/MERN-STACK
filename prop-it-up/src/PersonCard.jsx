import React, { useState, useEffect } from "react";

function PersonCard({ firstName, lastName, age, hairColor }) {
  const [currentAge, setCurrentAge] = useState(age);
  const [deathAge] = useState(() => Math.floor(Math.random() * 30) + 70); 
  const [isAlive, setIsAlive] = useState(true);

  const incrementAge = () => {
    if (isAlive) {
      setCurrentAge((prevAge) => {
        const newAge = prevAge + 1;
        if (newAge >= deathAge) {
          setIsAlive(false);
        }
        return newAge;
      });
    }
  };

  return (
    <div>
      {isAlive ? (
        <>
          <h2>
            {firstName} {lastName}
          </h2>
          <p>
            <strong>Age:</strong> {currentAge}
          </p>
          <p>
            <strong>Hair Color:</strong> {hairColor}
          </p>
          <button onClick={incrementAge}>
            Birthday Button for {firstName} {lastName}
          </button>
        </>
      ) : (
        <h2>
          {firstName} {lastName} has die at age {deathAge}.
        </h2>
      )}
    </div>
  );
}

export default PersonCard;
