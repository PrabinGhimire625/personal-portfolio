import React from 'react'
import Hero from './Hero'
import About from './About'
import Navbar from '../globals/Navbar'
import WorkProcess from './WorkProcess'
import Project from './Project'
import WhatIDo from './WhatIDo'
import Testimonial from './Testimonial'
import Skills from './Skills'
import Contact from './Contact'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <WorkProcess/>
    <Project/>
    <WhatIDo/>
    <Testimonial/>
    <Contact/>
    </>
  )
}

export default Landing
