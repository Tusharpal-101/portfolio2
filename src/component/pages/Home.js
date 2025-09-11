import React from 'react'

import Banner from "../Banner"
import SearchCategories from '../SearchCategories'
import CardSection from "../cardsection/Cardsection" 
import Simplecard from "../simplecard/Simplecard" // fixed import
import SocialSidebar from './SocialSidebar'
import Contact from "../contact/Contact"
import About from '../about/About'
import ShaderCanvas from "../shadecanvas/ShaderCanvas"

const Home = () => {
  return (
    <>
      <Banner />
       <SearchCategories />
        <Simplecard/> 
      <CardSection /> 
      <SocialSidebar/> 
      <About/>
      <ShaderCanvas/>  
      {/* <Contact/>
       {/* matches import */}
    </>
  )
}

export default Home
