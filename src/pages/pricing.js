import React from 'react'
import Layout from '../../components/common/Layout'
import PricingBanner from '../../components/container/Pricing/PricingBanner'
import FAQs from '../../components/container/Pricing/FAQs'
import NeedHelp from '../../components/container/Pricing/NeedHelp'
import Footer from '../../components/common/Footer'

export default function pricing() {
  return (
    <Layout>
        <PricingBanner />
        <FAQs />
        <NeedHelp />
    </Layout>
  )
}
