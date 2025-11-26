import { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is the video calling service really free?",
            answer: "Yes! Our core video calling features are completely free to use. You can host unlimited meetings with up to 100 participants without any time limits. We believe in accessible communication for everyone.",
        },
        {
            question: "Do I need to download any software?",
            answer: "No downloads required! Our platform runs entirely in your web browser. Whether you're on Chrome, Firefox, Safari, or Edge, you can join or host meetings instantly with just a click.",
        },
        {
            question: "Is my communication secure?",
            answer: "Security is our top priority. All video calls are protected with end-to-end encryption, ensuring that your conversations remain private and secure. We do not store any of your video or audio data.",
        },
        {
            question: "Can I share my screen during calls?",
            answer: "Absolutely! Screen sharing is built right in. You can share your entire screen, a specific application window, or a browser tab with high-definition clarity, perfect for presentations and collaboration.",
        },
        {
            question: "How many participants can join a meeting?",
            answer: "Our free plan supports up to 100 participants in a single meeting. For larger enterprise needs, we offer premium plans that support up to 1000 concurrent participants with advanced moderation controls.",
        },
        {
            question: "Does it work on mobile devices?",
            answer: "Yes, our platform is fully responsive and works seamlessly on smartphones and tablets. You can join meetings on the go directly from your mobile browser without installing an app.",
        },
    ];

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 animate-grid-move"></div>
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                        <span className="text-purple-400 text-xs font-mono tracking-widest uppercase">Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-pj tracking-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Everything you need to know about our platform. Can't find the answer you're looking for? Reach out to our support team.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group transition-all duration-300 border border-gray-800 rounded-2xl overflow-hidden ${openIndex === index ? 'bg-gray-800/80 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-700'}`}
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-purple-400' : 'text-gray-200 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${openIndex === index ? 'border-purple-500 bg-purple-500/20 rotate-180' : 'border-gray-600 group-hover:border-gray-500'}`}>
                                    <svg
                                        className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-gray-400 leading-relaxed border-t border-gray-700/50 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400">
                        Still have questions?{' '}
                        <a href="#" className="text-purple-400 font-medium hover:text-purple-300 transition-colors relative group">
                            Contact Support
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
