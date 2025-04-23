import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";

function App() {
  const phases = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "300px",
  };

  return (
    <div style={{ marginLeft: "300px", marginRight: "300px" }}>
      <Navigation />
      <Banner />
      <h2>Reliable IT support in Birmingham</h2>
      <p>
        We are dedicated to offering IT support to Birmingham businesses. We
        support businesses by leveraging technology to meet your required
        business needs. Our client-orientated approach allows for a seamless
        partnership between our skilled engineers and you to create and
        implement specialised IT and cyber security solutions.
      </p>
      <Gallery />
      <h2>Process</h2>
      <div style={phases}>
        <h2> Discovery and Assessment</h2>
        <p>
          We begin by understanding your business
          needs and current IT environment. This includes reviewing your
          hardware, software, network, and security to identify any issues or
          gaps. This phase helps us tailor the right solutions specifically for
          you.
        </p>
        <h2>Onboarding and Setup and Maintenance</h2>
        <div>
        <p>
          Next, we implement the agreed-upon IT tools
          and services, such as remote monitoring, backup systems, and security
          measures. We also set up access and communication channels so you can
          easily reach support whenever needed.
        </p>
        <p> Once everything is set up, we continuously monitor your IT
          systems remotely to detect and fix problems before they affect your
          business. Regular updates, patching, and backups happen automatically
          to keep your infrastructure secure and reliable.</p>
          </div>
        <h2>Support, Strategic IT Planning and Growth</h2>
        <div>
        <p>
          If you encounter any IT problems, you
          can contact us for fast, expert support. We troubleshoot and resolve
          issues remotely or onsite as needed, minimizing downtime and keeping
          your business running smoothly. 
          <p>
          Beyond day-to-day support, we help you plan for future technology
          needs, recommending upgrades or new solutions that align with your
          business goals. This ensures your IT environment scales with your
          growth.</p>
        </p>
</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
