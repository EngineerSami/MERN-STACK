import React from "react";

function PersonCard({ firstName, lastName, age, hairColor }) {
  return (
    <>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Hair Color:</strong> {hairColor}
      </p>
    </>
  );
}

export default PersonCard;
