import React, { useState } from "react";

const ColorBoxForm = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);


  const handleColorChange = (e) => {
    setColor(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setBoxes((prevBoxes) => [...prevBoxes, color]);
      setColor("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleColorChange} required/>
        <button type="submit">Add Color Box</button>
      </form>

      <div style={{display: "flex",flexWrap: "wrap",gap: "10px",marginTop: "20px",}}>
        {boxes.map((boxColor, index) => (
          <div key={index} style={{width: "100px",height: "100px",backgroundColor: boxColor, borderRadius: "8px",}}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxForm;
