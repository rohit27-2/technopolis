"use client"
import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

import Gallery from './_components/gallery'
import Features from './_components/Features'
import Aminities from './_components/Aminities'
import MasterPlan from './_components/MasterPlan'
import ProjectHero from './_components/ProjectHero'
function ProjectPage() {
  return (
    <div>
      <Header />
      <ProjectHero />
      <div>
        <Features />
      </div>
      <MasterPlan />
        <Aminities />
      
      
      <Gallery />
      
      
      

    </div>
  )
}

export default ProjectPage