"use client"
import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

import Gallery from './_components/Gallery'
import Features from './_components/Features'
import Aminities from './_components/Aminities'
import MasterPlan from './_components/MasterPlan'
import ProjectHero from './_components/ProjectHero'
import FloorPlans from './_components/FloorPlans'
import ConstructionProgress from './_components/ConstructionProgress'
function ProjectPage() {
  return (
    <div>
      <Header />
      <ProjectHero />
      <MasterPlan />
      <FloorPlans />
      <Features />
      <Aminities />
      <Gallery />
      <ConstructionProgress />
    </div>
  )
}

export default ProjectPage