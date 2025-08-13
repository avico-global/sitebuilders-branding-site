import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import { MapPin, Phone, Clock, Building, Globe } from 'lucide-react'

const OfficeInfo = () => {
  const offices = [
    {
      name: 'Headquarters',
      address: '123 Innovation Drive, Suite 500',
      city: 'San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      hours: 'Monday - Friday, 9AM - 6PM PST',
      type: 'primary'
    },
    {
      name: 'East Coast Office',
      address: '456 Tech Boulevard, Floor 3',
      city: 'New York, NY 10001',
      phone: '+1 (212) 555-0456',
      hours: 'Monday - Friday, 9AM - 6PM EST',
      type: 'secondary'
    },
    {
      name: 'European Office',
      address: '789 Digital Street, Building A',
      city: 'London, UK SW1A 1AA',
      phone: '+44 20 7946 0958',
      hours: 'Monday - Friday, 9AM - 6PM GMT',
      type: 'secondary'
    }
  ]

  return (
    <FullContainer className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Heading2 className="mb-4 text-gray-900">
            Visit Our Offices
          </Heading2>
          <Paragraph1 className="text-gray-600 max-w-2xl mx-auto">
            We have offices around the world to better serve our global community. 
            Stop by for a visit or schedule a meeting with our team.
          </Paragraph1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={office.name}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                office.type === 'primary' 
                  ? 'border-[#E24E28] bg-gradient-to-br from-[#E24E28]/5 to-[#E86F50]/5' 
                  : 'border-gray-200 bg-gray-50 hover:border-[#E24E28]/30'
              }`}
            >
              {office.type === 'primary' && (
                <div className="absolute -top-3 left-8 bg-[#E24E28] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Main Office
                </div>
              )}
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    office.type === 'primary' ? 'bg-[#E24E28]' : 'bg-gray-200'
                  }`}>
                    <Building className={`w-6 h-6 ${
                      office.type === 'primary' ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">
                      {office.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {office.type === 'primary' ? 'Global Headquarters' : 'Regional Office'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E24E28] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">{office.address}</p>
                      <p className="text-gray-600">{office.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#E24E28] mt-0.5 flex-shrink-0" />
                    <div>
                      <a 
                        href={`tel:${office.phone}`}
                        className="text-gray-900 font-medium hover:text-[#E24E28] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E24E28] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 text-sm">{office.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    office.type === 'primary'
                      ? 'bg-[#E24E28] text-white hover:bg-[#E86F50]'
                      : 'bg-white text-[#E24E28] border border-[#E24E28] hover:bg-[#E24E28] hover:text-white'
                  }`}>
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-[#E24E28]" />
              <h3 className="text-xl font-semibold text-gray-900">Global Support</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our support team is available 24/7 to help you with any questions or issues. 
              We provide support in multiple languages to serve our global community.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 24/7 Technical Support</li>
              <li>• Multi-language Support</li>
              <li>• Dedicated Account Managers</li>
              <li>• Priority Support for Enterprise</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-8 h-8 text-[#E24E28]" />
              <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We're here to help during business hours. For urgent matters outside of business hours, 
              please use our emergency support line.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Emergency Support:</span>
                <span className="font-medium text-[#E24E28]">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default OfficeInfo 