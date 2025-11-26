import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const HelpCenter = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Topics', icon: '📚', count: 24 },
        { id: 'account', name: 'Account', icon: '👤', count: 6 },
        { id: 'technical', name: 'Technical', icon: '🔧', count: 8 },
        { id: 'billing', name: 'Billing', icon: '💳', count: 4 },
        { id: 'features', name: 'Features', icon: '✨', count: 6 }
    ];

    const faqs = [
        {
            category: 'account',
            question: 'How do I create an account?',
            answer: 'Click the "Sign Up" button in the navigation bar, enter your email, username, and password. You\'ll receive a confirmation email to verify your account.'
        },
        {
            category: 'account',
            question: 'Can I use the service without an account?',
            answer: 'Yes! You can join video calls without creating an account. However, creating an account allows you to save preferences and access additional features.'
        },
        {
            category: 'technical',
            question: 'Why is my camera not working?',
            answer: 'Check your browser permissions: Click the lock icon in the address bar and ensure camera access is allowed. Also verify your system settings allow the browser to access your camera.'
        },
        {
            category: 'technical',
            question: 'What browsers are supported?',
            answer: 'We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using Chrome or Edge.'
        },
        {
            category: 'technical',
            question: 'How do I share my screen?',
            answer: 'Once in a call, click the screen share button in the toolbar. Select which screen or window you want to share, then click "Share".'
        },
        {
            category: 'features',
            question: 'How many people can join a call?',
            answer: 'Our platform supports unlimited participants in a single call. However, for optimal performance, we recommend keeping calls under 50 participants.'
        },
        {
            category: 'features',
            question: 'Can I record my calls?',
            answer: 'Yes! Click the record button during your call. Recordings are saved locally to your device. Please ensure you have permission from all participants before recording.'
        },
        {
            category: 'billing',
            question: 'Is the service free?',
            answer: 'Yes! Our core video calling service is 100% free with no time limits or hidden fees. We may offer premium features in the future.'
        },
        {
            category: 'billing',
            question: 'Do you offer enterprise plans?',
            answer: 'We\'re currently developing enterprise solutions. Contact our sales team for more information about custom plans and features.'
        }
    ];

    const contactOptions = [
        {
            title: 'Email Support',
            icon: '📧',
            description: 'Get help via email',
            action: 'support@videocall.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Live Chat',
            icon: '💬',
            description: 'Chat with our team',
            action: 'Start Chat',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Community Forum',
            icon: '👥',
            description: 'Ask the community',
            action: 'Visit Forum',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Phone Support',
            icon: '📞',
            description: 'Call us directly',
            action: '+1 (555) 123-4567',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const filteredFaqs = selectedCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            <Navbar />

            {/* Header */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-200"></div>
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
                            Help Center
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Find answers to common questions and get the support you need
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                <div className="relative flex items-center bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 py-4">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for help..."
                                        className="flex-1 ml-4 bg-transparent text-white placeholder-gray-400 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-gray-300 hover:border-pink-500/50'
                                }`}
                        >
                            <span className="text-xl">{category.icon}</span>
                            <span>{category.name}</span>
                            <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">{category.count}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 mb-16">
                <div className="space-y-4 animate-slide-up delay-200">
                    {filteredFaqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group relative"
                        >
                            <summary className="cursor-pointer list-none">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white pr-8">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </summary>
                            <div className="mt-2 p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl">
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* Contact Options */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
                    <p className="text-gray-300 text-lg">Our support team is here for you</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up delay-300">
                    {contactOptions.map((option, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 text-center h-full flex flex-col">
                                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto`}>
                                    {option.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{option.description}</p>
                                <div className="text-pink-400 font-semibold">{option.action}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HelpCenter;
