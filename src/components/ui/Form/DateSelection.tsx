import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const DateSelection: React.FC<{ onDateSelect: (date: Date) => void }> = ({
  onDateSelect,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value && !Array.isArray(value)) {
      setSelectedDate(value);
      onDateSelect(value);
    }
  };

  return (
    <div className="lex flex-col justify-center items-center  bg-white p-20 rounded-3xl">
      <h2 className="text-lg font-bold mb-4">Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="react-calendar"
        locale="en-US"  
      />
      {selectedDate && (
        <div className="mt-4 text-center">
          <p>Selected Date: {selectedDate.toDateString()}</p>
        </div>
      )}
      
    </div>
  );
};

export default DateSelection;
