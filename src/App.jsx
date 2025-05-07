import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/Footer";
//https://jayeclark.github.io/ INSPIRATION

function App() {

  return (
    <div style={{ marginLeft: "300px", marginRight: "300px", fontFamily: "sans-serif" }}>
      <Navigation />

      {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
