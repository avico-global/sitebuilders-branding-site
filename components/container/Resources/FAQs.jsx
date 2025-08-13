import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import FAQs from '../../ui/FAQs';
import { HelpCircle, Settings, CreditCard, Shield, Users } from 'lucide-react';

const ResourcesFAQs = () => {
    const faqData = {
        general: {
            title: "General Questions",
            icon: <HelpCircle className="w-5 h-5" />,
            questions: [
                {
                    question: "What is Sitebuilderz and how does it work?",
                    answer: "Sitebuilderz is an all-in-one website building platform that allows you to create, manage, and optimize web experiences without coding. It combines visual design tools, content management, hosting, and optimization features in one platform. You can start with templates, customize them with our drag-and-drop editor, and publish your site with just a few clicks."
                },
                {
                    question: "Is Sitebuilderz suitable for beginners?",
                    answer: "Absolutely! Sitebuilderz is designed to be user-friendly for people of all skill levels. We offer intuitive drag-and-drop tools, pre-built templates, and comprehensive tutorials. Whether you're a complete beginner or an experienced developer, you'll find the tools you need to create professional websites."
                },
                {
                    question: "Can I use my own domain name with Sitebuilderz?",
                    answer: "Yes, you can use your own custom domain name with Sitebuilderz. We provide domain registration services, or you can connect an existing domain from another provider. Our platform makes it easy to manage your domain settings and DNS configuration."
                },
                {
                    question: "What types of websites can I build with Sitebuilderz?",
                    answer: "Sitebuilderz supports a wide variety of website types including business websites, e-commerce stores, portfolios, blogs, landing pages, and more. Our templates and tools are designed to work for any industry or use case."
                }
            ]
        },
        pricing: {
            title: "Pricing & Billing",
            icon: <CreditCard className="w-5 h-5" />,
            questions: [
                {
                    question: "What are the different pricing plans available?",
                    answer: "Sitebuilderz offers several pricing tiers: Free (for basic websites), Starter ($12/month), Professional ($24/month), and Enterprise (custom pricing). Each plan includes different features, storage, and bandwidth limits. You can upgrade or downgrade your plan at any time."
                },
                {
                    question: "Is there a free trial available?",
                    answer: "Yes, we offer a free plan that allows you to build and publish a basic website. For premium features, you can start with a 14-day free trial of any paid plan. No credit card is required to start your free trial."
                },
                {
                    question: "Can I cancel my subscription at any time?",
                    answer: "Yes, you can cancel your subscription at any time. When you cancel, you'll continue to have access to your plan until the end of your current billing period. Your website will remain live, but you may need to downgrade to a free plan or export your content."
                },
                {
                    question: "Do you offer refunds?",
                    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with Sitebuilderz within the first 30 days, contact our support team for a full refund."
                }
            ]
        },
        features: {
            title: "Features & Functionality",
            icon: <Settings className="w-5 h-5" />,
            questions: [
                {
                    question: "What design templates are available?",
                    answer: "Sitebuilderz offers hundreds of professionally designed templates across various industries and use cases. All templates are fully customizable, mobile-responsive, and optimized for performance. You can browse templates by category, industry, or style."
                },
                {
                    question: "Can I customize the design of my website?",
                    answer: "Yes, you have complete control over your website's design. Our visual editor allows you to customize colors, fonts, layouts, and add custom CSS. You can also upload your own images and integrate with external design tools."
                },
                {
                    question: "Does Sitebuilderz support e-commerce functionality?",
                    answer: "Yes, Sitebuilderz includes powerful e-commerce features. You can create online stores with product catalogs, shopping carts, secure payment processing, inventory management, and order tracking. We integrate with major payment gateways and shipping providers."
                },
                {
                    question: "Can I integrate third-party tools and services?",
                    answer: "Absolutely! Sitebuilderz supports integrations with hundreds of third-party services including Google Analytics, Mailchimp, HubSpot, Zapier, and many more. You can also embed custom code and use webhooks for advanced integrations."
                }
            ]
        },
        security: {
            title: "Security & Performance",
            icon: <Shield className="w-5 h-5" />,
            questions: [
                {
                    question: "How secure is my website on Sitebuilderz?",
                    answer: "Security is our top priority. All websites hosted on Sitebuilderz include SSL certificates, DDoS protection, regular security updates, and automated backups. We follow industry best practices and comply with major security standards."
                },
                {
                    question: "What kind of performance can I expect?",
                    answer: "Sitebuilderz websites are built for speed and performance. We use CDN technology, optimized hosting infrastructure, and automatic image optimization to ensure fast loading times. Most websites load in under 2 seconds."
                },
                {
                    question: "Do you provide automatic backups?",
                    answer: "Yes, we automatically backup your website daily. You can also create manual backups at any time. Backups include all your content, design changes, and settings. You can restore from any backup point with just a few clicks."
                },
                {
                    question: "Is my data safe and private?",
                    answer: "Your data is completely secure and private. We never share your information with third parties, and all data is encrypted both in transit and at rest. We're GDPR compliant and follow strict data protection protocols."
                }
            ]
        },
        support: {
            title: "Support & Help",
            icon: <Users className="w-5 h-5" />,
            questions: [
                {
                    question: "What support options are available?",
                    answer: "We offer multiple support channels: 24/7 live chat, email support, comprehensive documentation, video tutorials, and community forums. Premium plans include priority support with faster response times."
                },
                {
                    question: "How quickly do you respond to support requests?",
                    answer: "Response times vary by plan: Free plan users get responses within 24 hours, while paid plan users typically receive responses within 2-4 hours. Enterprise customers get dedicated support with guaranteed response times."
                },
                {
                    question: "Do you offer training or onboarding?",
                    answer: "Yes, we provide comprehensive onboarding for new users including video tutorials, interactive guides, and personalized training sessions for enterprise customers. Our team is always available to help you get started."
                },
                {
                    question: "Can I export my website if I want to move to another platform?",
                    answer: "Yes, you can export your website content, images, and data at any time. We provide tools to export your site as static HTML/CSS or help you migrate to other platforms. Your content belongs to you."
                }
            ]
        }
    };

    return (
        <FullContainer className='py-16 bg-gray-50'>
            <Container>
                <FAQs 
                    faqData={faqData}
                    title="Frequently Asked Questions"
                    subtitle="Find answers to common questions about Sitebuilderz. Can't find what you're looking for? Contact our support team."
                    showSearch={true}
                    showCategories={true}
                    showCTA={true}
                />
            </Container>
        </FullContainer>
    );
};

export default ResourcesFAQs; 