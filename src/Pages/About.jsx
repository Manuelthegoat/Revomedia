import React from 'react'
import AboutComponent from '../Components/AboutComponent'
import Breadcrumb from '../Components/Breadcrumb'
import WhyChooseUs from '../Components/WhyChooseUs'
import Values from '../Components/Values'
import GetAQuote from '../Components/GetAQuote'

const About = () => {
  return (
    <main>
        <Breadcrumb title="About Company" />
        <AboutComponent />
        <WhyChooseUs />
        <Values />
        <GetAQuote hideSection={true} />
    </main>
  )
}

export default About