import React from "react";

const DeleteButton = ({ onDelete }) => {
  return <button onClick={onDelete} style={{ color: "red" }}>Delete</button>;
};

export default DeleteButton;
