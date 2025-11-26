import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Pricing = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Free',
            price: { monthly: 0, yearly: 0 },
            description: 'Perfect for personal use and small teams',
            icon: '🎯',
            color: 'from-blue-500 to-cyan-500',
            popular: false,
            features: [
                { text: 'Unlimited video calls', included: true },
                { text: 'Up to 50 participants', included: true },
                { text: 'HD video quality', included: true },
                { text: 'Screen sharing', included: true },
                { text: 'Chat messaging', included: true },
                { text: '40 minutes per call', included: true },
                { text: 'Basic support', included: true },
                { text: 'Recording', included: false },
                { text: 'Custom branding', included: false },
                { text: 'Priority support', included: false }
            ]
        },
        {
            name: 'Pro',
            price: { monthly: 12, yearly: 120 },
            description: 'For professionals and growing teams',
            icon: '🚀',
            color: 'from-purple-500 to-pink-500',
            popular: true,
            features: [
                { text: 'Everything in Free', included: true },
                { text: 'Unlimited participants', included: true },
                { text: 'Unlimited call duration', included: true },
                { text: 'Cloud recording', included: true },
                { text: 'Virtual backgrounds', included: true },
                { text: 'Advanced analytics', included: true },
                { text: 'Priority support', included: true },
                { text: 'Custom branding', included: false },
                { text: 'API access', included: false },
                { text: 'Dedicated account manager', included: false }
            ]
        },
        {
            name: 'Enterprise',
            price: { monthly: 'Custom', yearly: 'Custom' },
            description: 'For large organizations with custom needs',
            icon: '🏢',
            color: 'from-orange-500 to-red-500',
            popular: false,
            features: [
                { text: 'Everything in Pro', included: true },
                { text: 'Custom branding', included: true },
                { text: 'API access', included: true },
                { text: 'SSO integration', included: true },
                { text: 'Advanced security', included: true },
                { text: 'Dedicated infrastructure', included: true },
                { text: 'SLA guarantee', included: true },
                { text: 'Dedicated account manager', included: true },
                { text: 'Custom integrations', included: true },
                { text: '24/7 phone support', included: true }
            ]
        }
    ];

    const addons = [
        {
            name: 'Cloud Storage',
            icon: '☁️',
            price: { monthly: 5, yearly: 50 },
            description: '1TB of cloud storage for recordings',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Transcription',
            icon: '📝',
            price: { monthly: 10, yearly: 100 },
            description: 'AI-powered call transcription',
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'Webinar Mode',
            icon: '🎤',
            price: { monthly: 15, yearly: 150 },
            description: 'Host webinars with up to 1000 viewers',
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Advanced Analytics',
            icon: '📊',
            price: { monthly: 8, yearly: 80 },
            description: 'Detailed insights and reports',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const faqs = [
        {
            question: 'Can I change plans at any time?',
            answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
        },
        {
            question: 'Is there a free trial for paid plans?',
            answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required.'
        },
        {
            question: 'What happens if I exceed my plan limits?',
            answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade anytime or purchase add-ons.'
        },
        {
            question: 'Do you offer discounts for non-profits?',
            answer: 'Yes! We offer special pricing for educational institutions and non-profit organizations. Contact our sales team.'
        }
    ];

    const getPrice = (plan) => {
        if (plan.price[billingCycle] === 'Custom') return 'Custom';
        const price = plan.price[billingCycle];
        if (price === 0) return 'Free';
        return billingCycle === 'yearly' ? `$${price}/year` : `$${price}/mo`;
    };

    const getSavings = (plan) => {
        if (plan.price.monthly === 0 || plan.price.yearly === 'Custom') return null;
        const monthlyCost = plan.price.monthly * 12;
        const savings = monthlyCost - plan.price.yearly;
        return savings > 0 ? `Save $${savings}` : null;
    };

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
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Choose the perfect plan for your needs. Always know what you'll pay.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center gap-4 p-2 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all ${billingCycle === 'monthly'
                                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all ${billingCycle === 'yearly'
                                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                Yearly
                                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                    Save 17%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
                <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group ${plan.popular ? 'md:-mt-4' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="px-4 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>

                            <div className={`relative p-8 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col ${plan.popular ? 'border-pink-500/50 shadow-2xl' : ''
                                }`}>
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-white">
                                            {typeof plan.price[billingCycle] === 'number' && plan.price[billingCycle] > 0 ? '$' : ''}
                                            {plan.price[billingCycle] === 0 ? 'Free' : plan.price[billingCycle]}
                                        </span>
                                        {typeof plan.price[billingCycle] === 'number' && plan.price[billingCycle] > 0 && (
                                            <span className="text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                                        )}
                                    </div>

                                    {billingCycle === 'yearly' && getSavings(plan) && (
                                        <div className="text-green-400 text-sm font-semibold">
                                            {getSavings(plan)}
                                        </div>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="flex-grow mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-500'
                                                    }`}>
                                                    {feature.included ? '✓' : '×'}
                                                </span>
                                                <span className={feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => {
                                        if (plan.name === 'Enterprise') {
                                            // Contact sales
                                            window.location.href = 'mailto:sales@videocall.com';
                                        } else if (plan.name === 'Free') {
                                            navigate(isAuthenticated ? '/' : '/signup');
                                        } else {
                                            navigate('/signup');
                                        }
                                    }}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 ${plan.popular
                                            ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg hover:shadow-pink-500/50'
                                            : 'bg-gray-700/50 text-white hover:bg-gray-600/50'
                                        }`}
                                >
                                    {plan.name === 'Enterprise' ? 'Contact Sales' : plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add-ons */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold text-white mb-4">Power-ups & Add-ons</h2>
                    <p className="text-gray-300 text-lg">Enhance your plan with additional features</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up delay-200">
                    {addons.map((addon, index) => (
                        <div key={index} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${addon.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                            <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
                                <div className={`w-12 h-12 bg-gradient-to-br ${addon.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                                    {addon.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                                <div className="text-pink-400 font-bold">
                                    ${addon.price[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'year'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4 animate-slide-up delay-300">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group relative">
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

            <Footer />
        </div>
    );
};

export default Pricing;
