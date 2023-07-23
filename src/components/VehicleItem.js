import React from "react";

const VehicleItem = ({ vehicle }) => {
  const { name, capacity, price } = vehicle;
  return (
    <li className="vehicle-item">
      <h3>{name}</h3>
      <p>Capacity: {capacity}</p>
      <p>Price: {price}</p>
    </li>
  );
};

export default VehicleItem;
