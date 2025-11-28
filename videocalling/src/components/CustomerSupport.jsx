import React from 'react';

const CustomerSupport = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 animate-grid-move"></div>
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                        <span className="text-purple-400 text-xs font-mono tracking-widest uppercase">We're Here To Help</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-pj tracking-tight">
                        Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Support</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Experience world-class support designed to keep your connections seamless.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">24/7 Availability</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our support team is available round the clock to assist you with any issues, ensuring your meetings never stop.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Multi-Channel Support</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Reach us via email, phone, or live chat. We provide multiple avenues to ensure you get help the way you prefer.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Expert Assistance</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our team consists of video conferencing experts who can help resolve technical glitches and optimize your setup.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Details Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
                <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="mailto:support@videocalling.com" className="flex items-center p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-900 transition-colors group border border-gray-700/50 hover:border-purple-500/50">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-blue-500/30 transition-colors">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Email Support</p>
                                <p className="text-lg text-white font-semibold">support@videocalling.com</p>
                            </div>
                        </a>

                        <a href="tel:+1234567890" className="flex items-center p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-900 transition-colors group border border-gray-700/50 hover:border-green-500/50">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-green-500/30 transition-colors">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Phone Support</p>
                                <p className="text-lg text-white font-semibold">+1 (555) 123-4567</p>
                            </div>
                        </a>
                    </div>

                    <div className="mt-8 p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 flex items-center justify-center">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                            <span className="text-gray-300">Current Wait Time: <span className="text-white font-semibold">Less than 2 minutes</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSupport;
