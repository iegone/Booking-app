import React, { useState } from "react";
import ClientDetails from "./ClientDetails";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import Confirmation from "./Confirmation";

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<{
    name?: string;
    phone?: string;
    date?: string;
    time?: string;
  }>({});

  const handleClientDetails = (clientDetails: {
    name: string;
    phone: string;
  }) => {
    setDetails({ ...details, ...clientDetails });
    setStep(2);
  };

  const handleDateSelection = (date: Date) => {
    setDetails({ ...details, date: date.toDateString() });
    setStep(3);
  };

  const handleTimeSelection = (time: string) => {
    setDetails({ ...details, time });
    setStep(4);
  };

  const handleConfirm = () => alert("Booking Confirmed!");

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-100">
      {step === 1 && <ClientDetails onNext={handleClientDetails} />}
      {step === 2 && <DateSelection onDateSelect={handleDateSelection} />}
      {step === 3 && <TimeSelection onTimeSelect={handleTimeSelection} />}
      {step === 4 && (
        <Confirmation details={details} onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default Booking;
