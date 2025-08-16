import React from 'react'
import DiningAboutSection from '../components/dining/DiningAboutSection'
import DiningSlider from '../components/dining/DiningSlider'
import BrandSection from '../components/room&suite/BrandSection'
import AboutSection from '../components/room&suite/AboutSection'

export default function page() {
  return (
    <>
      <DiningAboutSection/>
      <DiningSlider name={"AnnaMaya"} img={["/dining/dining1.jpg", "/dining/dining2.jpg","/dining/dining32.jpg"]} />
      <DiningSlider name={"Juniper Bar"} img={["/dining/dining21.jpg", "/dining/dining22.jpg","/dining/dining32.jpg"]}/>
      <DiningSlider name={"Soul Pantry"} img={["/dining/dining32.jpg", "/dining/dining22.jpg","/dining/dining21.jpg"]}/>
      <DiningSlider name={"In-Room Dining"} img={["/dining/dining42.jpg", "/dining/dining22.jpg"]}/>
     <AboutSection/>
      <BrandSection/>
    </>
  )
}
