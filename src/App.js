// App.js
import React, { useState } from "react";
import LocationPicker from "./components/LocationPicker";
import DatePicker from "./components/DatePicker";
import VehicleList from "./components/VehicleList";
import data from "./data.json";
import "./components/styles.css";
const App = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = () => {
    // Perform any additional logic or API call here if needed
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Airport Transfer Booking App</h1>
      <div className="search-container">
        <LocationPicker
          pointA={pointA}
          setPointA={setPointA}
          pointB={pointB}
          setPointB={setPointB}
        />
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <VehicleList
        data={data.vehicles}
        pointA={pointA}
        pointB={pointB}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default App;
