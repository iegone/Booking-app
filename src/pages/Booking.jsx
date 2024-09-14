import ProgressComponent from "../components/ProgressComponent";
import { useState } from "react";
import BookingForm from "../components/BookingForm";
import Logo from "../components/Global/logo";
import MyBookingButton from "../components/Global/MyBookingButton";


function Booking() {
  const steps = ["1", "2", "3"];
  const descriptions = ["Info", "Date", "Time"];

  const availableSpecificDates = [new Date(2024, 8, 13)];
  const disabledSpecificDates = [new Date(2024, 8, 11), new Date(2024, 8, 21)];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: null,
    time: "",
  });

  const formatTimeTo12Hour = (hour, minute) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const adjustedHour = hour % 12 || 12;
    return `${adjustedHour}:${minute.toString().padStart(2, "0")} ${suffix}`;
  };

  const getAvailableTimes = () => {
    const times = [];
    const startHour = 16;
    const endHour = 20;
    for (let i = startHour; i < endHour; i++) {
      times.push(formatTimeTo12Hour(i, 0));
      times.push(formatTimeTo12Hour(i, 30));
    }
    times.push(formatTimeTo12Hour(endHour, 0));
    return times;
  };

  const availableTimes = getAvailableTimes();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1 && formData.name && formData.phone) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.date) {
      setCurrentStep(3);
    } else if (currentStep === 3 && formData.time) {
      setCurrentStep(4);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container bg-primary h-4/5 text-center rounded-2xl grid grid-cols-2">
      <div className="col-span-1 bg-slate-50 p-6 flex flex-col items-center justify-center">
        {/* إخفاء ProgressComponent في الخطوة الرابعة */}
        {currentStep !== 4 && (
          <ProgressComponent
            steps={steps}
            currentStep={currentStep}
            descriptions={descriptions}
          />
        )}

        <BookingForm
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
          availableTimes={availableTimes}
          availableSpecificDates={availableSpecificDates}
          disabledSpecificDates={disabledSpecificDates}
        />
      </div>

      <div className="col-span-1 flex flex-col h-full  w-full  p-6">
        <div className="w-full text-left font-bold  text-white text-lg flex items-center ">
          <Logo />
        </div>

        <div className=" h-full ">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white text-4xl font-bold mb-4">
              Book your appointment
            </div>
            <div className="text-white text-xl">
              {currentStep === 1 && (
                <div>Please enter your name and phone number.</div>
              )}
              {currentStep === 2 && (
                <div>Please select a date for your appointment.</div>
              )}
              {currentStep === 3 && (
                <div>Please select a time for your appointment.</div>
              )}
              {currentStep === 4 && (
                <div>
                  Your appointment is booked! We will call you to confirm.
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <MyBookingButton />
        </div>
      </div>
    </div>
  );
}

export default Booking;
