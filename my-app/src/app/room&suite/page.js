    import React from 'react'
import RoomsSuites from '../components/room&suite/RoomsSuites'
import RoomCard from '../components/room&suite/RoomCard'
import AboutSection from '../components/room&suite/AboutSection'
import BrandGrid from '../components/room&suite/BrandSection'
import BrandSection from '../components/room&suite/BrandSection'
    
    export default function page() {
      return (
        <>
        <RoomsSuites/>
        <RoomCard/>
        <AboutSection/>
        <BrandSection/>
        </>
      )
    }
    