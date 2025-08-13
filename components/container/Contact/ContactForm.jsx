import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Button from '../../ui/Button'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import { Send, MessageCircle, Phone, Mail } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <FullContainer className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="mb-8">
              <Heading2 className="mb-4 text-gray-900">
                Send us a Message
              </Heading2>
              <Paragraph1 className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </Paragraph1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <Heading2 className="mb-6 text-gray-900">
                Other Ways to Reach Us
              </Heading2>
              <Paragraph1 className="text-gray-600 mb-8">
                Prefer to contact us directly? Here are our contact details and office information.
              </Paragraph1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E24E28] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and support</p>
                  <a href="mailto:support@sitebuilderz.com" className="text-[#E24E28] hover:text-[#E86F50] transition-colors">
                    support@sitebuilderz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E24E28] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-2">Available Monday - Friday, 9AM - 6PM EST</p>
                  <a href="tel:+1-800-SITEBUILDERZ" className="text-[#E24E28] hover:text-[#E86F50] transition-colors">
                    +1 (800) SITE-BUILDERZ
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E24E28] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-2">Get instant help from our support team</p>
                  <button className="text-[#E24E28] hover:text-[#E86F50] transition-colors font-medium">
                    Start Chat →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default ContactForm 