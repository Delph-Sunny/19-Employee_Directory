import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

import "./App.css";


function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
