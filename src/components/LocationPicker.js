import React from "react";

const cities = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Miami",
  "Seattle",
  "Boston",
  "Las Vegas",
  "Houston",
  "Orlando",
];

const LocationPicker = ({ pointA, setPointA, pointB, setPointB }) => {
  return (
    <div className="location-picker">
      <div>
        <label className="location-label">Point A:</label>
        <select
          className="location-input"
          value={pointA}
          onChange={(e) => setPointA(e.target.value)}
        >
          <option value="">Select Point A</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="location-label">Point B:</label>
        <select
          className="location-input"
          value={pointB}
          onChange={(e) => setPointB(e.target.value)}
        >
          <option value="">Select Point B</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationPicker;
