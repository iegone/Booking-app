import React from "react";

const TimeSelection: React.FC<{ onTimeSelect: (time: string) => void }> = ({
  onTimeSelect,
}) => {
  const times = [
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
  ];

  const handleTimeClick = (time: string) => {
    onTimeSelect(time); // تمرير الوقت المختار
  };

  return (
    <div className="flex flex-col justify-center items-center  bg-white p-20 rounded-3xl">
      <h2 className="text-lg font-bold mb-4">Select a Time</h2>
      <div className="grid grid-cols-4 gap-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            className="bg-[#0064B3] text-white p-2 rounded"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
