import React from 'react'
import Layout from '../../components/common/Layout'
import AboutHero from '../../components/container/about/AboutHero'
import MissionVision from '../../components/container/about/MissionVision'
import TeamIntroduction from '../../components/container/about/TeamIntroduction'
import CompanyHistory from '../../components/container/about/CompanyHistory'
import AboutCTA from '../../components/container/about/AboutCTA'

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <TeamIntroduction />
      <CompanyHistory />
      <AboutCTA />
    </Layout>
  )
}
