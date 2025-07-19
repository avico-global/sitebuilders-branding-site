import { CircleAlert } from 'lucide-react'
import React, { useState } from 'react'

// Pricing data structure
export default function PriceCard({ plan, height }) {
    return (
        plan && (
            <div className='bg-[#171717] p-4 lg:p-6 rounded-sm text-white flex flex-col gap-4 h-full '>
                <div className={`flex flex-col justify-between gap-4 ${height}`}>

                    <div className='flex flex-row justify-between gap-2 '>
                        <button className='py-1 px-2 flex rounded-sm bg-primary flex-col items-center justify-center'>
                            <p className='text-sm uppercase font-bold '>{plan.name}</p>
                        </button>
                        {plan.tag && (
                            <button className='py-1 px-2 flex rounded-sm border border-gray-500 text-gray-500 flex-col items-center justify-center'>
                                <p className='text-sm uppercase font-bold '>{plan.tag}</p>
                            </button>
                        )}
                    </div>
                    <div className='flex flex-col items-start' >
                        <div className='flex flex-row items-center justify-between gap-2'>
                            <h2 className='text-4xl font-bold'>${plan.price}</h2>
                            <p className='text-base font-bold'>{plan.period}</p>
                        </div>
                        <h3 className='text-sm text-gray-300'>{plan.billing}</h3>
                    </div>
                    <p className='text-base text-gray-300 pr-10'>{plan.description}</p>
                    <button className='py-3 px-6 flex rounded-sm bg-primary flex-col items-center justify-center w-full'>
                        <p className='text-base uppercase font-bold '>{plan.name}</p>
                    </button>
                </div>
                {plan?.sections?.map((section, index) => (
                    <div key={index} className='flex flex-col items-start justify-start gap-2 border-b border-gray-500 py-4'>
                        <h3 className='text-sm text-gray-400 uppercase'>{section.title}</h3>
                        {section.items.map((item, itemIndex) => (
                            <DropUp key={itemIndex} text={item} />
                        ))}
                    </div>
                ))}
            </div>
        )
    )
}

const DropUp = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-row items-center justify-between w-full'>
            <p className='text-sm w-full text-gray-300'>{text}</p>
            <div
                className='flex items-center justify-end w-full  relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CircleAlert className='text-gray-400 h-4 w-4 cursor-help' />
                {isHovered && (
                    <div className='bg-gray-500 w-full absolute bottom-4 left-10 xl:left-1/2 min-w-40 text-gray-300 rounded-sm  text-xs max-w-xs z-10'>
                        <div className=' w-full h-full relative z-10 p-2 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque odio eos molestiae corporis sunt. Facilis neque, cupiditate quam deserunt laborum sequi totam quas omnis quasi aut eum dolor. Doloremque?
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}