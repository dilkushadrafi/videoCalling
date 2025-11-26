import React from 'react';

function PartnerLogo() {
    const partners = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
        // Duplicate for seamless scrolling
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
    ];

    return (
        <section className="py-20 bg-gray-900 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-pj">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Join thousands of companies that rely on our platform for secure and high-quality video communication.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden mask-linear-gradient">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent"></div>
                    <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent"></div>

                    <div className="flex w-[200%] animate-marquee pause-on-hover">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[200px] md:min-w-[250px] px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 transform hover:scale-110 cursor-pointer"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-8 md:h-10 object-contain invert brightness-0 hover:invert-0 hover:brightness-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerLogo;
