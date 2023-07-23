import React from "react";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="date-picker">
      <label className="date-label">Date:</label>
      <input
        className="date-input"
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
