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
        <section className="py-24 bg-gray-900 overflow-hidden relative">
            {/* Futuristic Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-grid-move"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                        <span className="text-purple-400 text-xs font-mono tracking-widest uppercase">Trusted Ecosystem</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-pj tracking-tight">
                        Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Next Gen</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join the visionary companies building the future of communication with our advanced infrastructure.
                    </p>

                    {/* Decorative Lines */}
                    <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-gradient-to-r from-transparent to-purple-500/50 hidden md:block"></div>
                    <div className="absolute top-1/2 right-0 w-24 h-[1px] bg-gradient-to-l from-transparent to-purple-500/50 hidden md:block"></div>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full">
                    {/* Side Fades */}
                    <div className="absolute top-0 left-0 z-20 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 z-20 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

                    <div className="flex w-[200%] animate-marquee pause-on-hover py-4">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-4"
                            >
                                <div className="glass-card w-48 h-28 flex items-center justify-center rounded-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-8 md:h-10 w-auto object-contain invert brightness-0 opacity-40 group-hover:opacity-100 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300 transform group-hover:scale-110 relative z-10"
                                    />

                                    {/* Tech Corner Accents */}
                                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300"></div>
                                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-pink-500/0 group-hover:border-pink-500/50 transition-all duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerLogo;
