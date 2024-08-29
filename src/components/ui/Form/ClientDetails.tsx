import React, { useState } from "react";
import { Button } from "../button";

const ClientDetails: React.FC<{
  onNext: (details: { name: string; phone: string }) => void;
}> = ({ onNext }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (name && phone) {
      onNext({ name, phone });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  bg-white p-20 rounded-3xl">
      <h2 className="text-[#0064B3] text-6xl mb-8">
        Booking <span className="text-[#FFAF08]">App</span>
      </h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" p-2 mb-4 w-full rounded-full px-4 py-4 border-4"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 mb-4 w-full rounded-full px-4 py-4 border-4"
      />
      <Button onClick={handleNext} className="py-4 w-40">
        Next
      </Button>
    </div>
  );
};

export default ClientDetails;
