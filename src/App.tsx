// import { useState } from 'react'

import "./App.css";
// import axios from 'axios';
import { Outlet } from "react-router-dom";

import Header from "@/views/Header";
import Footer from "@/views/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;