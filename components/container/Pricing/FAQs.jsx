import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import FAQs from '../../ui/FAQs'

const PricingFAQs = () => {
    const faqData = [
        {
            question: `What's the difference between a Workspace & a Site plan?`,
            answer: `There are 2 main types of Sitebuilderz plans: Site plans and Workspace plans.\n\nEvery site built in Sitebuilderz automatically lives inside of a Workspace.\n\nWhen you sign up for Sitebuilderz, you get a free Workspace plan by default. A Workspace is a space where you stage sites — and where you can invite teammates and clients to work on sites together. Upgrading your Workspace plan gives you access to enhanced staging capabilities and advanced collaboration features.\n\nSite plans give you the tools to build your site. When you sign up for Sitebuilderz, you automatically get a free Starter Site plan. When you need to publish, host, or unlock additional site-building features, you can upgrade that specific site to a paid Site plan.`
        },
        {
            question: 'How many Workspaces can I have?',
            answer: 'You can have multiple Workspaces, each with its own sites and team members.'
        },
        {
            question: 'How many paid Site plans can I have in my Workspace?',
            answer: 'You can have as many paid Site plans as you need within a Workspace.'
        },
        {
            question: 'Can I cancel my Site and/or Workspace at any time?',
            answer: 'Yes, you can cancel your Site or Workspace plan at any time.'
        },
        {
            question: 'What Business plan add-ons are available?',
            answer: 'Business plan add-ons include advanced features for teams and enterprises.'
        },
    ];

    return (
        <FullContainer>
            <Container>
                <FAQs 
                    faqData={faqData}
                    title="Frequently Asked Questions"
                    subtitle="We're here to help with any questions you have about plans, pricing, and supported features."
                    showSearch={false}
                    showCategories={false}
                    showCTA={true}
                />
            </Container>
        </FullContainer>
    );
}

export default PricingFAQs