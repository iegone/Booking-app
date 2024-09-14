import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import process from "process";
import User from "./models/User.js"; // استيراد نموذج المستخدم
import Booking from "./models/Booking.js"; // استيراد نموذج الحجز

// تحميل ملف .env
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// الاتصال بـ MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// مسار تسجيل أو تسجيل الدخول للمستخدم
app.post("api/register", async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ message: "Name and phone are required." });
  }
  try {
    const newUser = new User({ name, phone });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});
// مسار لإنشاء حجز
app.post("/api/book", async (req, res) => {
  const { userId, date, time } = req.body;

  console.log("Received booking data:", req.body); // طباعة البيانات التي تم استلامها من الـ form

  if (!userId || !date || !time) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const booking = new Booking({
      user: userId,
      date: new Date(date),
      time: time,
    });
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Booking creation error:", error); // طباعة الخطأ
    res.status(500).json({ message: "Error creating booking", error });
  }
});
// تشغيل السيرفر
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
