import React from "react";
import VehicleItem from "./VehicleItem";

const VehicleList = ({ data, pointA, pointB, selectedDate }) => {
  // Filter vehicles based on selected locations and date
  const filteredVehicles = data.filter((vehicle) => {
    // Perform filtering logic here based on pointA, pointB, and selectedDate
    // For example, you can compare the locations and check the availability for the date.
    return true; // Replace with your actual filtering condition
  });

  return (
    <div className="vehicle-list">
      <h2>
        Available Vehicles from {pointA} to {pointB}
      </h2>
      {filteredVehicles.length > 0 ? (
        <ul>
          {filteredVehicles.map((vehicle) => (
            <VehicleItem key={vehicle.id} vehicle={vehicle} />
          ))}
        </ul>
      ) : (
        <p>No vehicles available for the selected criteria.</p>
      )}
    </div>
  );
};

export default VehicleList;
