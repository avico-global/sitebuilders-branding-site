import React from 'react'
import Layout from '../../components/common/Layout'
import FeaturesHero from '../../components/container/Features/FeaturesHero'
import DetailedFeatures from '../../components/container/Features/DetailedFeatures'
import UseCases from '../../components/container/Features/UseCases'
import FeaturesCTA from '../../components/container/Features/FeaturesCTA'
import AllFeatures from '../../components/container/AllFeatures'

export default function Features() {
  return (
    <Layout>
      <FeaturesHero />
      <DetailedFeatures />
      <UseCases />
      <AllFeatures />
      <FeaturesCTA />
    </Layout>
  )
}
