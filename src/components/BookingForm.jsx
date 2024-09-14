import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const BookingForm = ({
  currentStep,
  formData,
  handleChange,
  handleNext,
  handleBack,
  availableTimes,
  availableSpecificDates,
  disabledSpecificDates,
}) => {
  
  return (
    <>
      {currentStep === 1 && (
        <form className="flex w-full flex-col gap-4 p-20" onSubmit={handleNext}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            className="p-2 rounded-md"
            value={formData.phone}
            onChange={handleChange}
          />
          <button className="bg-primary text-text p-2 rounded-md" type="submit">
            Next
          </button>
        </form>
      )}
      {currentStep === 2 && (
        <div className="flex w-full flex-col gap-4 p-20">
          <h2 className="text-2xl">Pick a Date</h2>
          <DatePicker
            selected={formData.date}
            onChange={(date) =>
              handleChange({ target: { name: "date", value: date } })
            }
            filterDate={(date) => {
              const day = date.getDay();
              const isSpecificDate = availableSpecificDates.some(
                (d) => d.toDateString() === date.toDateString()
              );
              const isDisabledDate = disabledSpecificDates.some(
                (d) => d.toDateString() === date.toDateString()
              );
              return (
                ((day !== 5 && day !== 6) || isSpecificDate) && !isDisabledDate
              );
            }}
            placeholderText="Pick a date"
            className="p-2 rounded-md"
            dateFormat="dd/MM/yyyy"
          />
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-text p-2 rounded-md"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="bg-primary text-text p-2 rounded-md"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex w-full flex-col gap-4 p-20">
          <h2 className="text-2xl">Pick a Time</h2>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                className={`p-2 rounded-md ${
                  formData.time === time
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  handleChange({ target: { name: "time", value: time } })
                }
              >
                {time}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-text p-2 rounded-md"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="bg-green-500 text-text p-2 rounded-md"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      
      {currentStep === 4 && (
        <div className="flex w-full flex-col gap-4 p-20">
          <h2 className="text-2xl text-primary">Confirm your booking</h2>
          <div className="border-2 px-6 py-4 rounded-lg">
            <table className="text-left px-6 min-w-full divide-y divide-neutral-200">
              <tr>
                <th>Name:</th>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>{formData.phone}</td>
              </tr>
              <tr>
                <th>Date:</th>
                <td>{formData.date && formData.date.toLocaleDateString()}</td>
              </tr>
              <tr>
                <th>Time:</th>
                <td>{formData.time}</td>
              </tr>
            </table>
          </div>
          <p className="text-secondary">
            We expect you to arrive 10 minutes before the appointment.
          </p>
          <div>
            <div className=" border-y-2 px-6 py-4 ">
              <table className="text-left text-text-dark px-6 min-w-full divide-y divide-neutral-200">
                <tr>
                  <th>Address</th>
                  <tb>oman, Muscat, Bawshar, MISFAH </tb>
                </tr>
                <tr>
                  <th>Phone numbers</th>
                  <tb>78437221 - 77144209</tb>
                </tr>
              </table>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-text p-2 rounded-md"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="bg-green-500 text-text p-2 rounded-md"
              onClick={async () => {
                try {
                  const response = await axios.post(
                    "http://localhost:5001/api/book",
                    {
                      userId: "<userId from registration>", // تأكد من تمرير الـ userId الصحيح
                      date: formData.date,
                      time: formData.time,
                    }
                  );
                  console.log("Booking created:", response.data);
                  window.location.href = "/Confirm"; // الانتقال إلى صفحة التأكيد بعد نجاح الطلب
                } catch (error) {
                  console.error("Error creating booking:", error);
                }
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// **إضافة PropTypes للتحقق من صحة البيانات الممررة كـ props**
BookingForm.propTypes = {
  currentStep: PropTypes.number.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    time: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  availableSpecificDates: PropTypes.arrayOf(PropTypes.instanceOf(Date))
    .isRequired,
  disabledSpecificDates: PropTypes.arrayOf(PropTypes.instanceOf(Date))
    .isRequired,
};

export default BookingForm;
