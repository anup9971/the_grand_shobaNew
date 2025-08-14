import React from 'react'
import CitySection from "./components/CitySection";
import HotelIntro from "./components/HotelIntro";
import RoomsAndSuites from './components/RoomsAndSuites';
import HotelSlider from './components/HotelSlider';
import LocationCard from './components/LocationCard';
import DiningSlider from './components/DiningSilder';
import ExploreDelhiSlider from './components/ExploreDelhiSlider';
import ReviewCard from './components/ReviewCard';
import Amenities from './components/Amenities';
import PetsWelcome from './components/PetsWelcome';
import AccessibilitySection from './components/AccessibilitySection';
import OffersSection from './components/OffersSection';
export default function page() {
  return (
    <>
    <CitySection/>
        <HotelIntro/>
        <RoomsAndSuites/>
        <HotelSlider/>
        <LocationCard/>
        <DiningSlider/>
        <ExploreDelhiSlider/>
        <ReviewCard></ReviewCard>
        <Amenities/>
        <PetsWelcome/>
        <AccessibilitySection/>
        <OffersSection/>
    </>
  )
}
