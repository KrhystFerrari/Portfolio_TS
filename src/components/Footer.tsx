import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-md">© {new Date().getFullYear()} Krhyst Ferrari</p>
      </div>
    </footer>
  );
};

export default Footer;
