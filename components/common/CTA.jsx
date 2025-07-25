import React from 'react'
import FullContainer from './FullContainer'
import Container from './Container'

const logos = [
  '1.svg',
  '2.svg',
  '3.svg',
  '4.svg',
  '5.svg',
  '7.svg',
  '8.svg',
  '10.svg',
  '11.svg',
];

export default function CTA() {
  return (
    <FullContainer className='bg-black'>
      <Container>
        <div className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Get started<br />for free</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">Try our platform for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">Get started — it’s free</button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg text-lg flex items-center gap-2 transition border border-white/20">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7L8 5z" /></svg>
                Watch demo
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-lg">
            {logos.map((logo, idx) => (
              <div key={logo} className="flex items-center justify-center h-16">
                <img
                  src={`/st-images/hosting/logos/${logo}`}
                  alt={`Logo ${idx + 1}`}
                  className="max-h-12 object-contain grayscale opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

    </FullContainer>
  )
}