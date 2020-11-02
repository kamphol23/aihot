import React from "react";
import "./App.css";

import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import LandingPage from "./landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
