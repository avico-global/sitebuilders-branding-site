import React, { useState } from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import Heading1 from '../../ui/Heading1';
import Heading2 from '../../ui/Heading2';

const faqData = [
    {
        category: 'Workspace & Site plans',
        faqs: [
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
        ]
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = idx => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <FullContainer>
            <Container className="max-w-4xl mx-auto py-10 md:py-24">
                <Heading2 className="mb-4">Frequently asked questions</Heading2>
                <p className="text-2xl mb-12 md:mb-24">We're here to help with any questions you have about plans, pricing, and supported features.</p>
                {faqData.map((group) => (
                    <div key={group.category} className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12 h-full">
                        <div className="lg:col-span-2 font-bold text-4xl md:text-5xl mr-0 md:mr-10 leading-tight mb-8 md:mb-0 h-full">
                            <div className='sticky top-16'>
                            {group.category.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                            </div>
                        </div>
                        <div className="flex-1 w-full col-span-3">
                            {group.faqs.map((faq, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div key={faq.question} className="border-b border-gray-200">
                                        <button
                                            onClick={() => handleToggle(idx)}
                                            className={`w-full text-left bg-transparent border-none py-6 text-base md:text-2xl font-bold flex items-center justify-between cursor-pointer focus:outline-none hover:text-primary transition-all duration-300 ${isOpen ? 'text-primary' : 'text-black'}`}
                                        >
                                            {faq.question}
                                            <span
                                                className={`transition-transform duration-200 ml-4 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                                            >
                                                <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
                                                    <line x1="16" y1="8" x2="16" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                                    <line x1="8" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </button>
                                       
                                         <div className={`${isOpen ? 'max-h-[1000px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-4 opacity-0 overflow-hidden'} transition-all duration-700 text-sm md:text-lg text-gray-800 pb-6 ` }>
                                            {faq.answer}
                                        </div>
                                     
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </Container>
        </FullContainer>
    );
}

export default FAQs