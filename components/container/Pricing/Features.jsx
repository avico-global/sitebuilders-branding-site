import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import { CheckIcon, Minus, MinusCircle, MinusIcon, XIcon } from 'lucide-react'

const Features = ({ type }) => {
    // General Plans Table
    const generalHeaders = ['Features', 'Starter', 'Basic', 'CMS', 'Business', 'Enterprise']
    const generalFeatures = [
        {
            name: 'Webflow.io domain',
            starter: 'yes',
            basic: 'no',
            cms: 'no',
            business: 'no',
            enterprise: 'no'
        },
        {
            name: 'Custom domain',
            starter: 'no',
            basic: 'yes',
            cms: 'yes',
            business: 'yes',
            enterprise: 'yes'
        },
        {
            name: 'Pages',
            starter: '2',
            basic: '150',
            cms: '150',
            business: '300',
            enterprise: 'Unlimited'
        },
        {
            name: 'CMS Collections',
            starter: '20',
            basic: '0',
            cms: '20',
            business: '40',
            enterprise: 'Unlimited'
        },
        {
            name: 'CMS Items',
            starter: '50',
            basic: '0',
            cms: '2,000',
            business: '10,000',
            enterprise: 'Unlimited'
        },
        {
            name: 'Form Submits',
            starter: '50 (lifetime)',
            basic: 'Unlimited',
            cms: 'Unlimited',
            business: 'Unlimited',
            enterprise: 'Unlimited'
        },
        {
            name: 'Bandwidth',
            starter: '1 GB',
            basic: '10 GB',
            cms: '50 GB',
            business: '100 GB',
            enterprise: 'Unlimited'
        },
        {
            name: 'Site Search',
            starter: 'no',
            basic: 'no',
            cms: 'yes',
            business: 'yes',
            enterprise: 'yes'
        }
    ]

    // Ecommerce Plans Table
    const ecommerceHeaders = ['Features', 'Standard', 'Plus', 'Advanced']
    const ecommerceFeatures = [
        {
            name: 'Ecommerce Items',
            standard: '500',
            plus: '5,000',
            advanced: '15,000'
        },
        {
            name: 'CMS Items',
            standard: '2,000',
            plus: '10,000',
            advanced: '10,000'
        },
        {
            name: 'Transaction Fee',
            standard: '2%',
            plus: '0%',
            advanced: '0%'
        },
        {
            name: 'All CMS Plan Features',
            standard: 'yes',
            plus: 'yes',
            advanced: 'yes'
        }
    ]

    // For Teams Plans Table
    const teamsHeaders = ['Features', 'Starter', 'Core', 'Growth', 'Enterprise']
    const teamsFeatures = [
        {
            name: 'Staging Sites',
            starter: '2',
            core: '10',
            growth: 'Unlimited',
            enterprise: 'Unlimited'
        },
        {
            name: 'Pages per Staged Site',
            starter: '2',
            core: '300',
            growth: '300',
            enterprise: 'Unlimited'
        },
        {
            name: 'CMS Items per Staged Site',
            starter: '50',
            core: '50',
            growth: '50',
            enterprise: 'Unlimited'
        },
        {
            name: 'Custom Code',
            starter: 'no',
            core: 'yes',
            growth: 'yes',
            enterprise: 'yes'
        },
        {
            name: 'Code Export',
            starter: 'no',
            core: 'yes',
            growth: 'yes',
            enterprise: 'yes'
        },
        {
            name: 'Site Password Protection',
            starter: 'no',
            core: 'no',
            growth: 'yes',
            enterprise: 'yes'
        }
    ]

    // For Freelancers Plans Table
    const freelancerHeaders = ['Features', 'Freelancer', 'Agency']
    const freelancerFeatures = [
        {
            name: 'Staging Sites',
            freelancer: '10',
            agency: 'Unlimited'
        },
        {
            name: 'Free Guest Access',
            freelancer: 'yes',
            agency: 'yes'
        },
        {
            name: 'Full CMS Access',
            freelancer: 'yes',
            agency: 'yes'
        },
        {
            name: 'Client Payments',
            freelancer: 'yes',
            agency: 'yes'
        },
        {
            name: 'Advanced Roles & Permissions',
            freelancer: 'no',
            agency: 'yes'
        },
        {
            name: 'Shared Libraries',
            freelancer: 'no',
            agency: 'yes'
        }
    ]

    const renderTable = (headers, features, title) => (
        <>
            <div className='mb-16 hidden md:block'>
                <h2 className='text-lg md:text-2xl font-bold mb-6 text-center'>{title}</h2>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className='border-b border-white/10 mb-4'>
                            {headers.map((header, index) => (
                                <th key={index} className={`text-xs md:text-base py-3 px-3 border-x border-white/10 ${index === headers.length - 1 ? '' : 'border-r border-white/10'} ${index === 0 ? 'text-left' : 'text-center '}`}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#171717]' : ''}`}>
                                {Object.keys(feature).map((item, itemIndex) => (
                                    <td key={itemIndex} className={`text-xs md:text-base border-b py-3 items-center px-3 border-white/10  ${itemIndex === Object.keys(feature).length - 1 ? '' : 'border-r border-white/10'} ${itemIndex === 0 ? 'text-left' : 'text-center items-center'} border-x`}>
                                        {feature[item] === 'yes' ? (
                                            <div className='flex items-center justify-center w-full'>
                                                <CheckIcon className='w-4 h-4 border p-0.5 rounded-full' />
                                            </div>
                                        ) : feature[item] === 'no' ? (
                                            <div className='flex items-center justify-center w-full'>
                                                <MinusIcon className='w-4 h-4' />
                                            </div>
                                        ) : (
                                            feature[item]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mb-16 md:hidden'>
                <h2 className='text-lg md:text-2xl font-bold mb-6 text-center'>{title}</h2>
                <div className='overflow-x-auto'>
                    <table className='w-full min-w-full'>
                    <thead className='w-full'>
                        <tr className='border-b border-white/10 mb-4'>
                            {headers.slice(0, 1).map((header, index) => (
                                <th key={index} colSpan={headers.length} className={`text-xs md:text-base py-3  text-left px-3 border-b border-white/10`}>{header}</th>
                            ))}
                        </tr>
                        <tr className='border-b border-white/10 mb-4'>
                            {headers.slice(1).map((header, index) => (
                                <th key={index} className={`text-xs md:text-base py-3 px-3 ${index === headers.length - 1 ? '' : 'border-x border-white/10'} ${index === 0 ? 'text-left' : 'text-center '}`}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <>
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#171717]' : ''}`}>
                                    {Object.keys(feature).slice(0, 1).map((item, itemIndex) => (
                                        <td key={itemIndex} colSpan={headers.length} className={`text-xs md:text-base border-b py-3 items-center px-3 border-white/10 border-x text-left`}>
                                            {feature[item] === 'yes' ? (
                                                <div className='flex items-center justify-center w-full'>
                                                    <CheckIcon className='w-4 h-4 border p-0.5 rounded-full' />
                                                </div>
                                            ) : feature[item] === 'no' ? (
                                                <div className='flex items-center justify-center w-full'>
                                                    <MinusIcon className='w-4 h-4' />
                                                </div>
                                            ) : (
                                                feature[item]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#171717]' : ''}`}>
                                    {Object.keys(feature).slice(1).map((item, itemIndex) => (
                                        <td key={itemIndex} className={`text-xs md:text-base border-b border-x py-3 items-center px-3 border-white/10  ${itemIndex === Object.keys(feature).length - 1 ? '' : 'border-r border-white/10'} ${itemIndex === 0 ? 'text-left' : 'text-center items-center'}`}>
                                            {feature[item] === 'yes' ? (
                                                <div className={`flex items-center  w-full ${itemIndex === 0 ? 'text-left  items-start' : 'text-center justify-center items-center'}`}>
                                                    <CheckIcon className='w-4 h-4 border p-0.5 rounded-full ' />
                                                </div>
                                            ) : feature[item] === 'no' ? (
                                                <div className='flex items-center justify-center w-full'>
                                                    <MinusIcon className='w-4 h-4' />
                                                </div>
                                            ) : (
                                                feature[item]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )

    return (
        <FullContainer className='bg-black text-white'>
            <div className='py-10'>
                {type === 'general' && (
                    renderTable(generalHeaders, generalFeatures, 'General Plans')
                )}
                {type === 'ecommerce' && (
                    renderTable(ecommerceHeaders, ecommerceFeatures, 'Ecommerce Plans')
                )}
                {type === 'teams' && (
                    renderTable(teamsHeaders, teamsFeatures, 'For Teams Plans')
                )}
                {type === 'freelancers' && (
                    renderTable(freelancerHeaders, freelancerFeatures, 'For Freelancers Plans')
                )}
            </div>
        </FullContainer>
    )
}

export default Features