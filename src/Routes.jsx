import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Services from "./Pages/Services";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import Quotation from "./Pages/Quotation";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import ProductsTable from './Pages/ProductsTable'
import EditProduct from './Pages/EditProduct'

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
        <Route path='/login' element={<Login />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/admin-products" element={<ProductsTable />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
};

export default Routing;
