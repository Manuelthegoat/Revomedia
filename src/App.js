import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero";
import SliderText from "./Components/SliderText";
import Text from "./Components/Text";
import FeaturesOne from "./Components/FeaturesOne";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import GetAQuote from "./Components/GetAQuote";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <SliderText /> */}
        <Text />
        <Services />
        <Testimonial />
        <GetAQuote />
        <FeaturesOne />
      </main>
      <Footer />
    </>
  );
}

export default App;
