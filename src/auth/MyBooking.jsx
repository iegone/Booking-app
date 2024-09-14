import { useState } from "react";

import axios from "axios";

const ConfirmBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );
      alert(response.data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error during login/registration:", error);
    }
  };

  return (
    <div className="container bg-white p-6 rounded-md">
      {!isLoggedIn ? (
        <div>
          <h2 className="text-2xl mb-4">تسجيل الدخول أو التسجيل</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="اسم المستخدم"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md"
            >
              تأكيد التسجيل أو تسجيل الدخول
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-4">تأكيد الحجز</h2>
          <p>تم تسجيلك بنجاح. يمكنك الآن تأكيد الحجز:</p>
          <div className="border p-4 rounded-md mt-4">
            <p>
              <strong>اسم المستخدم:</strong> {formData.name}
            </p>
            <p>
              <strong>رقم الهاتف:</strong> {formData.phone}
            </p>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
            تأكيد الحجز
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;
