import React from "react";
import HomeSection from "./components/HomeSection";
import Header from './components/Header'
import Work from './components/WorkSection'
import Foot from './components/Footer'
import Nav from './components/Navbar'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <HomeSection />
      <Work />
      <Foot />
    </div>
  );
}

export default App;
