import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Documentation = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const sections = [
        {
            title: 'Getting Started',
            icon: '🚀',
            articles: [
                { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', time: '5 min read' },
                { title: 'Creating Your First Room', description: 'Learn how to create and join video rooms', time: '3 min read' },
                { title: 'Inviting Participants', description: 'Share room links and invite others', time: '2 min read' }
            ]
        },
        {
            title: 'Features',
            icon: '✨',
            articles: [
                { title: 'Screen Sharing', description: 'Share your screen with participants', time: '4 min read' },
                { title: 'Chat & Messaging', description: 'Send messages during calls', time: '3 min read' },
                { title: 'Recording Sessions', description: 'Record your video calls', time: '5 min read' },
                { title: 'Virtual Backgrounds', description: 'Customize your background', time: '3 min read' }
            ]
        },
        {
            title: 'Account & Settings',
            icon: '⚙️',
            articles: [
                { title: 'Managing Your Profile', description: 'Update your account information', time: '3 min read' },
                { title: 'Audio & Video Settings', description: 'Configure camera and microphone', time: '4 min read' },
                { title: 'Privacy & Security', description: 'Control your privacy settings', time: '5 min read' }
            ]
        },
        {
            title: 'Troubleshooting',
            icon: '🔧',
            articles: [
                { title: 'Camera Not Working', description: 'Fix camera permission issues', time: '3 min read' },
                { title: 'Audio Issues', description: 'Resolve microphone problems', time: '4 min read' },
                { title: 'Connection Problems', description: 'Fix network connectivity issues', time: '5 min read' }
            ]
        }
    ];

    const quickLinks = [
        { name: 'API Reference', icon: '📖', color: 'from-blue-500 to-cyan-500' },
        { name: 'Video Tutorials', icon: '🎬', color: 'from-purple-500 to-pink-500' },
        { name: 'FAQ', icon: '❓', color: 'from-green-500 to-emerald-500' },
        { name: 'Changelog', icon: '📋', color: 'from-orange-500 to-red-500' }
    ];

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
                            Documentation
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Everything you need to know about using our video calling platform
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
                                        placeholder="Search documentation..."
                                        className="flex-1 ml-4 bg-transparent text-white placeholder-gray-400 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
                    {quickLinks.map((link, index) => (
                        <button
                            key={index}
                            className="relative group p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto`}>
                                {link.icon}
                            </div>
                            <h3 className="text-white font-semibold text-center">{link.name}</h3>
                        </button>
                    ))}
                </div>
            </div>

            {/* Documentation Sections */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-20">
                <div className="space-y-12">
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="animate-slide-up" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">{section.icon}</span>
                                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.articles.map((article, articleIndex) => (
                                    <div
                                        key={articleIndex}
                                        className="relative group cursor-pointer"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 h-full">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4">{article.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{article.time}</span>
                                                <svg className="w-5 h-5 text-pink-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Documentation;
