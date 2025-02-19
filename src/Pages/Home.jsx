import React from 'react'
import Hero from "../Components/Hero";
import SliderText from "../Components/SliderText";
import Text from "../Components/Text";
import FeaturesOne from "../Components/FeaturesOne";
// import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import GetAQuote from "../Components/GetAQuote";
import Services from './Services';

const Home = () => {
  return (
    <>
         <main>
        <Hero />
        {/* <SliderText /> */}
        <Text />
        <Services hide />
        <Testimonial />
        <GetAQuote hideSection={true} />
        <FeaturesOne />
      </main>
    </>
  )
}

export default Home