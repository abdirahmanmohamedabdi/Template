import Navbar from "./components/Navbar";
import React from 'react'
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/contact";
export const Homepage = () => {
  return (
    <div>

   <Hero/>
   <Testimonial/>
   <Contact/>
 
   </div>
  )
}
