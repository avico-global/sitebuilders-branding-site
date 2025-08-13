import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import FAQs from '../../ui/FAQs'

const ContactFAQ = () => {
  const contactFAQs = [
    {
      question: "What's the best way to get technical support?",
      answer: "For technical support, we recommend using our live chat feature for immediate assistance, or emailing support@sitebuilderz.com. Our support team typically responds within 2-4 hours during business hours."
    },
    {
      question: "How quickly will I receive a response to my inquiry?",
      answer: "We aim to respond to all inquiries within 24 hours. For urgent matters, please use our phone support line or live chat for immediate assistance."
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer: "Absolutely! You can schedule a personalized demo by contacting our sales team at sales@sitebuilderz.com or calling our main office. We offer both online and in-person consultations."
    },
    {
      question: "Do you offer enterprise support?",
      answer: "Yes, we provide dedicated enterprise support with priority response times, dedicated account managers, and custom solutions. Contact our enterprise team for more information."
    },
    {
      question: "What are your business hours?",
      answer: "Our main office is open Monday through Friday, 9AM to 6PM PST. However, our technical support team is available 24/7 for urgent issues."
    },
    {
      question: "Can I visit your office for a meeting?",
      answer: "Yes, we welcome visitors! Please contact us in advance to schedule a meeting. We have offices in San Francisco, New York, and London."
    },
    {
      question: "What information should I include in my support request?",
      answer: "To help us assist you faster, please include: your account email, a detailed description of the issue, any error messages you're seeing, and steps to reproduce the problem if applicable."
    },
    {
      question: "Do you provide phone support for all customers?",
      answer: "Phone support is available for all customers during business hours. Enterprise customers receive priority phone support with dedicated account managers."
    }
  ]

  return (
    <FullContainer className="py-20">
      <Container>
        <FAQs 
          faqData={contactFAQs}
          title="Contact & Support FAQs"
          subtitle="Find quick answers to common questions about contacting us and getting support. Can't find what you're looking for? Our support team is here to help."
          showSearch={true}
          showCTA={true}
        />
      </Container>
    </FullContainer>
  )
}

export default ContactFAQ 