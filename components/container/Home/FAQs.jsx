import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import FAQs from '../../ui/FAQs'

const HomeFAQs = () => {
  const faqData = [
    {
      question: "What is Sitebuilderz and how is it different from other website builders?",
      answer: "Sitebuilderz is an all-in-one website platform that combines visual design tools, a powerful CMS, enterprise-grade hosting, and AI-powered features. Unlike traditional website builders, Sitebuilderz offers a visual-first approach with composable architecture, allowing teams to create sophisticated websites without sacrificing design flexibility or performance."
    },
    {
      question: "Do I need coding knowledge to use Sitebuilderz?",
      answer: "No coding knowledge is required to get started with Sitebuilderz. Our visual canvas allows designers and marketers to create stunning websites through drag-and-drop functionality. However, developers can extend functionality with custom code when needed, making it perfect for both no-code and low-code workflows."
    },
    {
      question: "What hosting features does Sitebuilderz provide?",
      answer: "Sitebuilderz offers enterprise-grade hosting with automatic backups, versioning, staging domains, password protection, branching capabilities, and localization support. Our platform securely processes tens of billions of page views monthly with built-in surge protection and custom security headers for enterprise users."
    },
    {
      question: "How does Sitebuilderz's CMS work?",
      answer: "Our visual-first CMS allows you to edit content directly on the design canvas with real-time previews. You can create and manage up to 20 CMS collections with 50 items on the free plan, and scale up with paid plans. The CMS integrates seamlessly with your design workflow, enabling content teams to publish without developer involvement."
    },
    {
      question: "What AI features are available in Sitebuilderz?",
      answer: "Sitebuilderz includes AI-powered tools like the AI Assistant for layout and component generation, AI-driven personalization for optimization, and intelligent content editing. These features help accelerate your workflow while maintaining brand consistency and design quality."
    },
  ]

  return (
    <FullContainer>
      <Container>
        <FAQs 
          faqData={faqData}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Sitebuilderz. Can't find the answer you're looking for? Please reach out to our friendly support team."
          showSearch={false}
          showCategories={false}
          showCTA={true}
        />
      </Container>
    </FullContainer>
  )
}

export default HomeFAQs