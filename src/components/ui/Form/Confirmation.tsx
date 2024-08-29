import React, { useState } from "react";
import Invoice from "./Invoice";
import { LuPrinter } from "react-icons/lu";

const Confirmation: React.FC<{
  details: { name?: string; phone?: string; date?: string; time?: string };
  onConfirm: () => void;
}> = ({ details, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm();
  };

  const printInvoice = () => {
    const invoiceWindow = window.open("", "_blank");
    if (invoiceWindow) {
      invoiceWindow.document.write("<html><head><title>Invoice</title>");
      invoiceWindow.document.write(
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">'
      ); // تضمين Tailwind CSS
      invoiceWindow.document.write("</head><body>");
      invoiceWindow.document.write(
        document.getElementById("invoice")!.innerHTML
      );
      invoiceWindow.document.write("</body></html>");
      invoiceWindow.document.close();
      invoiceWindow.focus();
      invoiceWindow.print();
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center  bg-white p-20 rounded-3xl">
      <table className="text-left">
        <tr>
          <td className="">Name:</td>
          <td className="p-1  px-7 capitalize ">{details.name}</td>
        </tr>

        <tr>
          <td>Phone:</td>
          <td className="p-1  px-7 capitalize">{details.phone}</td>
        </tr>

        <tr>
          <td>Date:</td>
          <td className="p-1  px-7 capitalize ">{details.date}</td>
        </tr>

        <tr>
          <td>Time:</td>
          <td className="p-1  px-7 capitalize ">{details.time}</td>
        </tr>
      </table>

      <button
        onClick={handleConfirm}
        className="bg-[#0064B3] text-right text-white p-2 rounded mt-4"
      >
        Confirm
      </button>
      {isConfirmed && (
        <div className="mt-4">
          <button
            onClick={printInvoice}
            className="bg-gray-500 text-white p-2 rounded"
          >
            <LuPrinter />
          </button>

          <div id="invoice" style={{ display: "none" }}>
            <Invoice
              details={
                details as {
                  name: string;
                  phone: string;
                  date: string;
                  time: string;
                }
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
