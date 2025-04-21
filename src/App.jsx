import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";

function App() {
  return (
    <div
      style={{ textAlign: "center", marginLeft: "300px", marginRight: "300px" }}
    >
      <Navigation />
      <Banner />
      <Gallery />
      <h2>Benefits</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam
        illo explicabo quod optio necessitatibus quae reprehenderit magnam, nisi
        fugit corporis doloribus praesentium voluptatum suscipit laudantium,
        repellendus natus qui quos!
      </p>
      <h2>Case studies</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        assumenda neque at optio accusamus dolor nam, totam eius adipisci
        deleniti tempora voluptatum ea cupiditate ad atque quod veniam ab unde!
      </p>
      <Footer />
    </div>
  );
}

export default App;
