import React from 'react'
import Layout from '../../components/common/Layout'
import ContactHero from '../../components/container/Contact/ContactHero'
import ContactForm from '../../components/container/Contact/ContactForm'
import SocialMedia from '../../components/container/Contact/SocialMedia'
import OfficeInfo from '../../components/container/Contact/OfficeInfo'
import ContactFAQ from '../../components/container/Contact/ContactFAQ'

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <SocialMedia />
      <OfficeInfo />
      <ContactFAQ />
    </Layout>
  )
}
