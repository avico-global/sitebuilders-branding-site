import React from 'react'
import Layout from '../../components/common/Layout'
import LocalizationHero from '../../components/container/Localization/LocalizationHero'
import ExploreResources from '../../components/container/ExploreResources'
import Customize from '../../components/container/Localization/Customize'
import CTA from '../../components/common/CTA'
import AllFeatures from '../../components/container/AllFeatures'
import Translate from '../../components/container/Localization/Translate'

export default function Localization() {
    return (
        <Layout>
            <LocalizationHero />
            <Customize />
            <Translate />
            <ExploreResources />
            <Customize />
            <AllFeatures />
            <CTA />
        </Layout>
    )
}