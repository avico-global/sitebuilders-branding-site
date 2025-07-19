import React from 'react'
import Layout from '../../components/common/Layout'
import HostingHero from '../../components/container/Hosting/HostingHero'
import Process from '../../components/container/Hosting/Process'
import ScaleSecurity from '../../components/container/Hosting/ScaleSecurity'
import SiteManagement from '../../components/container/Hosting/SiteManagement'
import AllFeatures from '../../components/container/AllFeatures'
import CTA from '../../components/common/CTA'

const Hosting = () => {
    return (
        <Layout>
            <HostingHero />
            <Process id="hostingprocess" />
            <ScaleSecurity />
            <SiteManagement />
            <AllFeatures />
            <CTA />
        </Layout>
    )
}

export default Hosting