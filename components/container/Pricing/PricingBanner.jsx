import React, { useEffect, useState } from 'react'
import Layout from '../../common/Layout'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Button from '../../ui/Button'
import Heading2 from '../../ui/Heading2'
import PriceCard from './PriceCard'
import pricingData from '../../../json/site.json'
import Features from './Features'
export default function PricingBanner() {

  const [activeTab, setActiveTab] = useState('sites')
  const [activeplan, setActiveplan] = useState('general')
  const [pricingdata, setPricingdata] = useState(pricingData.general)
  const [showFeatures, setShowFeatures] = useState(false)

  useEffect(() => {
    if (activeTab === 'sites') {
      if (activeplan === 'general') {
        setPricingdata(pricingData.general)
      } else if (activeplan === 'ecommerce') {
        setPricingdata(pricingData.ecommerce)
      }
    } else if (activeTab === 'workspaces') {
      if (activeplan === 'teams') {
        setPricingdata(pricingData.forteams)
      } else if (activeplan === 'freelancers') {
        setPricingdata(pricingData.forfreelancers)
      }
    }
  }, [activeTab, activeplan])
  console.log(pricingdata)
  return (
    <FullContainer className='bg-black text-white'>
              <Container spacing="large">
        <Heading1 className='' >
          Our pricing
        </Heading1>
        <div className='flex flex-row gap-2 md:gap-0 justify-between pt-10'>
          <div className={`flex flex-col gap-2 w-1/2 border-b-2 pb-10 hover:text-white transition-all duration-300 cursor-pointer ${activeTab === 'sites' ? 'text-white border-b-primary' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('sites')
              setActiveplan('general')
            }}>
            <h2 className='text-sm md:text-lg font-bold'>
              Sites
            </h2>
            <p className='text-lg md:text-2xl font-semibold  leading-tight'>Build, publish, and publich with ease</p>
          </div>
          <div className={`flex flex-col gap-2 w-1/2 border-b-2 pb-10  hover:text-white transition-all duration-300 cursor-pointer ${activeTab === 'workspaces' ? 'text-white border-b-primary' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('workspaces')
              setActiveplan('teams')
            }}>
            <h2 className='text-sm md:text-lg font-bold'>
              Workspaces
            </h2>
            <p className='text-lg md:text-2xl font-semibold  leading-tight'>Add a team, and manage your projects</p>
          </div>
        </div>
        {activeTab === 'sites' && (
          <div className='pt-10'>
            <div className='flex flex-col md:flex-row justify-start gap-6 lg:gap-10'>
              <h2 className='text-3xl md:text-5xl font-bold w-fit'>Site Plans</h2>
              <div className='flex w-full h-full md:w-fit md:h-fit flex-col md:flex-row gap-2 bg-[#171717] p-1.5 rounded-md'>
                <button className={`text-base px-3 py-1.5 h-full w-full md:w-fit md:h-fit cursor-pointer rounded-sm text-gray-500 hover:text-white transition-all duration-300 ${activeplan === 'general' ? 'text-white bg-gradient-to-b from-[#363636] to-[#484848]' : 'text-gray-500'}`}
                  onClick={() => {
                    setActiveplan('general')
                  }}>
                  General
                </button>
                <button className={`text-base px-3 py-1.5 h-full w-full md:w-fit md:h-fit cursor-pointer rounded-sm text-gray-500 hover:text-white transition-all duration-300 ${activeplan === 'ecommerce' ? 'text-white bg-gradient-to-b from-[#363636] to-[#484848]' : 'text-gray-500'}`}
                  onClick={() => {
                    setActiveplan('ecommerce')
                  }}>
                  Ecommerce
                </button>
              </div>
            </div>
            <div></div>
          </div>
        )}
        {activeTab === 'workspaces' && (
          <div className='pt-10'>
            <div className='flex flex-col md:flex-row justify-start gap-6 lg:gap-10'>
              <h2 className='text-3xl md:text-5xl font-bold w-fit'>Workspace Plans</h2>
              <div className='flex h-full w-full md:w-fit md:h-fit flex-col md:flex-row gap-2 bg-[#171717] p-1.5 rounded-md'>
                <button className={`text-base px-3 py-1.5 h-full w-full md:w-fit md:h-fit cursor-pointer rounded-sm text-gray-500 hover:text-white transition-all duration-300 ${activeplan === 'teams' ? 'text-white bg-gradient-to-b from-[#363636] to-[#484848]' : 'text-gray-500'}`}
                  onClick={() => {
                    setActiveplan('teams')
                  }}>
                  For Teams
                </button>
                <button className={`text-base px-3 py-1.5 h-full w-full md:w-fit md:h-fit cursor-pointer rounded-sm text-gray-500 hover:text-white transition-all duration-300 ${activeplan === 'freelancers' ? 'text-white bg-gradient-to-b from-[#363636] to-[#484848]' : 'text-gray-500'}`}
                  onClick={() => {
                    setActiveplan('freelancers')
                  }}
                >For Freelancers and agencies
                </button>
              </div>
            </div>
            <div></div>
          </div>
        )}



        <div className={`grid  gap-4 mt-16 ${activeplan === 'general' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5' : activeplan === 'teams' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {
            pricingdata?.map((plan, index) => (
              <div key={index} className='flex flex-col gap-4'>
                <PriceCard plan={plan} height={'h-[300px]'} />
              </div>
            ))
          }
        </div>

        <div className='mt-10 w-full flex justify-center items-center '>
          <button className='bg-gradient-to-b from-[#363636] to-[#484848] text-white px-4 py-2 rounded-md' onClick={() => setShowFeatures(!showFeatures)}>
            {showFeatures ? 'Hide features' : 'View features'}
          </button>
        </div>
        <div className={`mt-10 overflow-hidden transition-all duration-700 ease-in-out ${showFeatures ? 'max-h-[2000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
          <Features type={activeplan} />
        </div>
      </Container>
    </FullContainer>
  )
}