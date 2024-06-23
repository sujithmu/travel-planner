import React from 'react'
import {ASSETS} from '../../../public/Assets'
import  TripPlanner from '@/components/template/planner/TripPlanner'
import HeroSection from '@/components/template/heroSection/HeroSection'
import Navbar from '@/components/Navbar'

function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection image={ASSETS.planner_banner} title="Trip Planner"/>
      <TripPlanner />
    </div>
  )
}

export default page