import React from 'react'
import CitySection from "./components/CitySection";
import HotelIntro from "./components/HotelIntro";
import RoomsAndSuites from './components/RoomsAndSuites';
export default function page() {
  return (
    <>
    <CitySection/>
        <HotelIntro/>
        <RoomsAndSuites/>
      <h1>Welcome to The Grand Shoba</h1>
    </>
  )
}
