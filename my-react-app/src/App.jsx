import React from "react";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import Footer from "./Components/Footer";
// import { Routes, Route } from "react-router-dom";
import Refex from "./Components/refex";

const App = () => {
  return (
    <>
      <Header />
      <Quiz type={"Javascript"} marks={"85"} />
      <Quiz type={"React"} marks={"95"} />
      <Refex />
      <Footer />
    </>
  );
};

export default App;
