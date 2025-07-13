import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BackToTop,
} from "./components";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
