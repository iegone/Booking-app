import React from "react";

const Invoice: React.FC<{
  details: { name: string; phone: string; date: string; time: string };
}> = ({ details }) => {
  return (
    <div className=" p-4 border w-[561.25984252px] h-[793.7007874px] border-gray-300  ">
      <h1 className="text-2xl text-center text-green-500 font-bold mb-4">
        booking confirmed
      </h1>
      <br />
      <hr />
      <br />
      <div className="mb-4 text-left">
        <div className=" ">
          <table className="">
            <tr>
              <td className="">Name:</td>
              <td className="p-1 font-semibold  px-7 capitalize ">
                {details.name}
              </td>
            </tr>

            <tr>
              <td>Phone:</td>
              <td className="p-1 font-semibold px-7 capitalize">
                {details.phone}
              </td>
            </tr>

            <tr>
              <td>Date:</td>
              <td className="p-1 font-semibold  px-7 capitalize ">
                {details.date}
              </td>
            </tr>

            <tr>
              <td>Time:</td>
              <td className="p-1 font-semibold px-7 capitalize ">
                {details.time}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <p className="text-left">
          <strong className="text-red-500">Note:</strong> Please arrive 10
          minutes before your appointment
        </p>{" "}
        {/* يمكن تعديل هذا بناءً على التفاصيل الفعلية */}
      </div>
    </div>
  );
};

export default Invoice;
