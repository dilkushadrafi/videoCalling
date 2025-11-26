import React, { useState } from 'react';

function Testimony() {
    const [selectedReview, setSelectedReview] = useState(null);
    const [showAllReviews, setShowAllReviews] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: 'Michael Kim',
            role: 'Software Engineer',
            img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
            review: 'Absolutely amazing! Their services exceeded my expectations. I\'m thrilled with the results.',
            fullReview: 'Absolutely amazing! Their services exceeded my expectations. I\'m thrilled with the results. The team was incredibly responsive and understood our needs perfectly. The final product was delivered on time and within budget. I would highly recommend them to anyone looking for top-notch development services.'
        },
        {
            id: 2,
            name: 'Melissa Reynolds',
            role: 'UX Designer',
            img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
            review: 'Impressed beyond words! Their professionalism and attention to detail are unmatched. I highly recommend them.',
            fullReview: 'Impressed beyond words! Their professionalism and attention to detail are unmatched. From the initial consultation to the final delivery, every step was handled with care and expertise. The user interface they designed is intuitive and beautiful. I highly recommend them for any UX/UI projects.'
        },
        {
            id: 3,
            name: 'Sarah Morgan',
            role: 'Content Strategist',
            img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
            review: 'Outstanding experience! Their support team is exceptional and the quality of their work is top-notch.',
            fullReview: 'Outstanding experience! Their support team is exceptional and the quality of their work is top-notch. They helped us refine our content strategy and provided valuable insights that have already improved our engagement metrics. I\'m a delighted customer and will definitely work with them again.'
        },
        {
            id: 4,
            name: 'David Lee',
            role: 'Product Manager',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
            review: 'A game changer for our business. The scalability and performance are incredible.',
            fullReview: 'A game changer for our business. The scalability and performance are incredible. We were struggling with our old system, but this new solution has streamlined our operations and allowed us to focus on growth. The support has been fantastic throughout the transition.'
        },
        {
            id: 5,
            name: 'Emma Wilson',
            role: 'Marketing Director',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
            review: 'The best investment we made this year. Our ROI has skyrocketed thanks to their innovative solutions.',
            fullReview: 'The best investment we made this year. Our ROI has skyrocketed thanks to their innovative solutions. The marketing tools provided are powerful yet easy to use. We\'ve seen a significant increase in leads and conversions since implementing their strategies.'
        },
        {
            id: 6,
            name: 'James Chen',
            role: 'Startup Founder',
            img: 'https://randomuser.me/api/portraits/men/67.jpg',
            review: 'Fast, reliable, and secure. Exactly what we needed to launch our platform with confidence.',
            fullReview: 'Fast, reliable, and secure. Exactly what we needed to launch our platform with confidence. As a startup, we needed a partner who could move quickly without compromising quality. They delivered on all fronts, and we couldn\'t be happier with the result.'
        }
    ];

    const displayedTestimonials = showAllReviews ? testimonials : testimonials.slice(0, 3);

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 animate-grid-move"></div>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                            <span className="text-purple-400 text-xs font-mono tracking-widest uppercase">Community Love</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-pj tracking-tight">
                            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Thousands</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            See what our community has to say about their experience with our platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {displayedTestimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                onClick={() => setSelectedReview(testimonial)}
                                className="group relative cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative flex flex-col h-full p-8 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="flex items-center mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                                            <img
                                                className="relative w-14 h-14 rounded-full object-cover border-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300"
                                                src={testimonial.img}
                                                alt={testimonial.name}
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300"
                                                style={{ transitionDelay: `${i * 50}ms` }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <blockquote className="flex-1">
                                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            "{testimonial.review}"
                                        </p>
                                    </blockquote>

                                    <div className="mt-6 flex items-center text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        Read full review
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowAllReviews(!showAllReviews)}
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-out transform translate-x-0 -translate-y-0 bg-purple-600 rounded-full group-hover:translate-x-1 group-hover:translate-y-1 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative flex items-center gap-2">
                                {showAllReviews ? 'Show Less' : 'Check all reviews'}
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${showAllReviews ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Full Review */}
            {selectedReview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedReview(null)}>
                    <div
                        className="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl transform transition-all animate-slide-up"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedReview(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex items-center mb-8">
                            <img
                                className="w-20 h-20 rounded-full object-cover border-4 border-purple-500"
                                src={selectedReview.img}
                                alt={selectedReview.name}
                            />
                            <div className="ml-6">
                                <h3 className="text-2xl font-bold text-white">{selectedReview.name}</h3>
                                <p className="text-purple-400">{selectedReview.role}</p>
                                <div className="flex mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                "{selectedReview.fullReview}"
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center">
                            <span className="text-sm text-gray-500">Verified User</span>
                            <button
                                onClick={() => setSelectedReview(null)}
                                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Testimony;
