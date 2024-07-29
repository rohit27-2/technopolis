"use client"
import React from 'react'
import Gallery from './_components/Gallery'
import Features from './_components/Features'
import Aminities from './_components/Aminities'
import MasterPlan from './_components/MasterPlan'
import ProjectHero from './_components/ProjectHero'
import FloorPlans from './_components/FloorPlans'
import ConstructionProgress from './_components/ConstructionProgress'
import Specifications from './_components/Specifications'
import NavBar from './_components/NavBar'
function ProjectPage() {
  return (
    <div>
      <NavBar />
      <ProjectHero />
      <MasterPlan />
      <FloorPlans />
      <Features />
      <Aminities />
      <Specifications />
      <Gallery />
      <ConstructionProgress />
    </div>
  )
}

export default ProjectPage