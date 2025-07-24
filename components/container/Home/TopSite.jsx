import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function TopSite() {
    const brandsSlider1 = [
        {
            name: 'Fashion',
            image: '/st-images/sites/fashion.webp',
            href: 'https://fashion.amplifytest1.top'
        },
        {
            name: 'Magzine',
            image: '/st-images/sites/magzine.webp',
            href: 'https://magzine.amplifytest1.top'
        },
        {
            name: 'BizzBlog',
            image: '/st-images/sites/bizzblog.webp',
            href: 'https://bizzblog.amplifytest1.top'
        },
        {
            name: 'Koga',
            image: '/st-images/sites/koga.webp',
            href: 'https://koga.amplifytest1.top'
        },
        {
            name: 'Isabelle Roche',
            image: '/st-images/sites/isabelleroche.webp',
            href: 'https://isabelle-roche.amplifytest1.top/'
        },
        {
            name: 'Newspaper Pro',
            image: '/st-images/sites/newspaperpro.webp',
            href: 'https://newspaperpro.amplifytest1.top'
        },
        {
            name: 'Local sanjose',
            image: '/st-images/sites/local.webp',
            href: 'https://local-sanjose.amplifytest1.top'
        },
        {
            name: 'Local HVC',
            image: '/st-images/sites/hvc.webp',
            href: 'https://httpsgithubcomavico-globalservice-next15-hvac.amplifytest1.top'
        },
        {
            name: 'Digital Spy',
            image: '/st-images/sites/digitalspy.webp',
            href: 'https://blog-next14temp-3.amplifytest1.top'
        },
        {
            name: 'Towing',
            image: '/st-images/sites/towing.webp',
            href: 'https://www.towing.com'
        },
        {
            name: 'Chronicle',
            image: '/st-images/sites/chronicle.webp',
            href: 'https://chronicle.amplifytest1.top'
        },
        {
            name: 'Gamer',
            image: '/st-images/sites/gammer.webp',
            href: 'https://katen.amplifytest1.top'
        },
        {
            name: 'Linx',
            image: '/st-images/sites/linxamplify.webp',
            href: 'https://linx.amplifytest1.top'
        },
        {
            name: 'App Recipe Picks',
            image: '/st-images/sites/apprecipepicks.webp',
            href: 'https://app.recipepicks.com/'
        },
        {
            name: 'Recipe Picks',
            image: '/st-images/sites/recipepicks.webp',
            href: 'https://https://www.recipepicks.com/'
        },
        {
            name: 'Site Builderz',
            image: '/st-images/sites/sitebuilderz.webp',
            href: 'https://www.sitebuilderz.com'
        },
    ]

        
    return (
        <FullContainer className=' bg-white'>
            <Container className=' py-20 '>
                <div className='w-full flex flex-col items-center justify-center' >
                    <h2 className='text-4xl md:text-5xl font-[600] w-full text-center m-0'>Top No Code Websites</h2>
                    <p className='text-lg mt-8 mb-10 text-[#222] text-center max-w-[850px] '>Check out some of the best websites users have made with Google Sites. It may be a free simple tool, but there are amazing sites all around web built on the platform. Consider this a free resource for inspiration on your next stunning website project or go ahead and purchase a template..</p>
                    <div className=' w-full max-w-[800px] mx-auto shadow-lg p-4 rounded-md'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-6'>
                        {brandsSlider1.map((item, index) => (
                            <Link href={item.href} className=' rounded-t-md overflow-hidden' key={index}>
                                <Image src={item.image} alt={item.name} width={1000} height={1000}  className='w-full h-auto'/>
                                <h3 className='text-gray-800 text-[10px] md:text-xs text-center  font-bold'> this site is about {item.name}</h3>
                                <h5 className='text-gray-500 text-[10px] md:text-xs text-center w-full'>$99</h5>
                            </Link>
                        ))}
                      </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center mt-10' >
                    <h2 className='text-xl text-[22px] font-[600] w-full text-center m-0'>Discover the professional websites built on Google</h2>
                    <p className='text-lg mt-6 mb-10 text-[#222] text-center max-w-[850px] '>There are 50+ templates available to buy and use with Google Sites from the online store.</p>
                    <button className="bg-primary text-white text-xl py-3 px-4 rounded-lg font-medium cursor-pointer mb-6 hover:bg-primary/80 transition">
                        Browse Google Sites Themes
                    </button>
                </div>
                </div>
            </Container>
        </FullContainer>
    )
}