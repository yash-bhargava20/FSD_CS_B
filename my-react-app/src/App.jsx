import React from "react";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Quiz type={"Javascript"} marks={"85"} />
      <Quiz type={"React"} marks={"95"} />
      <Footer />
    </>
  );
};

export default App;
