import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, Search, MessageCircle, BookOpen } from 'lucide-react';

const FAQs = ({ 
    faqData, 
    title = "Frequently Asked Questions",
    subtitle = "Find answers to common questions. Can't find what you're looking for? Contact our support team.",
    showSearch = false,
    showCategories = false,
    showCTA = true,
    className = ""
}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [openCategory, setOpenCategory] = useState(showCategories ? Object.keys(faqData)[0] : null);
    const [searchTerm, setSearchTerm] = useState('');

    // Handle different data structures
    const isCategorized = showCategories && typeof faqData === 'object' && !Array.isArray(faqData);
    const currentFAQs = isCategorized ? faqData[openCategory]?.questions || [] : faqData;

    // Filter FAQs based on search term
    const filteredFAQs = showSearch && searchTerm 
        ? currentFAQs.filter(faq => 
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : currentFAQs;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleCategoryChange = (category) => {
        setOpenCategory(category);
        setOpenIndex(null); // Reset open question when changing category
    };

    return (
        <div className={`bg-gradient-to-br from-gray-50 via-white to-gray-50 ${className}`}>
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E24E28] to-[#E86F50] rounded-2xl mb-6 shadow-lg">
                        <span className="text-2xl">❓</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Search Bar */}
                {showSearch && (
                    <div className="max-w-md mx-auto mb-12">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent"
                            />
                        </div>
                    </div>
                )}

                {/* Category Tabs */}
                {showCategories && isCategorized && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(faqData).map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    openCategory === category
                                        ? 'bg-[#E24E28] text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-[#E24E28]/30'
                                }`}
                            >
                                {faqData[category].icon}
                                {faqData[category].title}
                            </button>
                        ))}
                    </div>
                )}

                {/* FAQ Content */}
                <div className="grid gap-6">
                    {filteredFAQs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
                                openIndex === index
                                    ? 'border-[#E24E28]/30 bg-white shadow-xl shadow-[#E24E28]/10' 
                                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                            }`}
                        >
                            {/* Gradient border effect */}
                            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                                openIndex === index
                                    ? 'opacity-100' 
                                    : 'opacity-0'
                            }`}>
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E24E28]/10 via-[#E86F50]/10 to-[#E24E28]/10"></div>
                            </div>

                            <button
                                className="relative w-full px-8 py-4 text-left flex justify-between items-start hover:bg-gray-50/50 transition-all duration-300 rounded-2xl"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex-1 pr-6">
                                    <span className="font-semibold text-lg text-gray-900 leading-relaxed group-hover:text-[#E24E28] transition-colors duration-300">
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    openIndex === index
                                        ? 'bg-[#E24E28] text-white rotate-180' 
                                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#E24E28] group-hover:text-white'
                                }`}>
                                    {openIndex === index ? (
                                        <ChevronUpIcon className="w-5 h-5 transition-transform duration-300" />
                                    ) : (
                                        <ChevronDownIcon className="w-5 h-5 transition-transform duration-300" />
                                    )}
                                </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ease-out ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-8 pb-6">
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#E24E28] to-[#E86F50] mb-4 rounded-full"></div>
                                    <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                {showCTA && (
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Still have questions?
                                </h3>
                                <p className="text-gray-300 mb-8 text-lg">
                                    Our support team is here to help you get the most out of Sitebuilderz
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        Contact Support
                                    </button>
                                    <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                                        <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        View Documentation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQs; 