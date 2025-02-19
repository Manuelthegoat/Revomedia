import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { useLocation, matchPath } from "react-router-dom";

import Footer from "./Components/Footer";
import Routing from "./Routes";

function App() {
  const location = useLocation();

  // Define paths where layout should be hidden
  const hideLayoutPaths = ["/admin", "/login", "/admin-products"];
  
  // Check if the current path matches the dynamic /edit-product/:id route
  const isEditProductPage = matchPath("/edit-product/:id", location.pathname);
  
  // Combine conditions to decide whether to hide the layout
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname) || isEditProductPage;
  return (
    <>
      {!shouldHideLayout && <Header />}
      <Routing />
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
