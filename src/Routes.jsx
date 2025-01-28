import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Services from "./Pages/Services";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import Quotation from "./Pages/Quotation";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quotation" element={<Quotation />} />
      </Routes>
    </>
  );
};

export default Routing;
