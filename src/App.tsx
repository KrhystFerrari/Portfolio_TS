import React from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, BackToTop } from "./components";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-[#0a0a0f]">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
          </div>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
