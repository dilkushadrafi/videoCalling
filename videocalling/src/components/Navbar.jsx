import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showResourcesMenu, setShowResourcesMenu] = useState(false);
    const { isAuthenticated, logout, user } = useAuth();
    const navigate = useNavigate();
    const userMenuRef = useRef(null);
    const resourcesMenuRef = useRef(null);

    const handleLogin = () => {
        navigate('/login');
        setExpanded(false);
    };

    const handleSignup = () => {
        navigate('/signup');
        setExpanded(false);
    };

    const handleLogout = () => {
        logout();
        setShowUserMenu(false);
        setExpanded(false);
    };

    const createInstantRoom = () => {
        const randomRoomId = Math.random().toString(36).substring(2, 10);
        navigate(`/room/${randomRoomId}`);
        setExpanded(false);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
            if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target)) {
                setShowResourcesMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const resourcesLinks = [
        { name: 'Documentation', icon: '📚', path: '/docs' },
        { name: 'Help Center', icon: '❓', path: '/help' },
        { name: 'Community', icon: '👥', path: '/community' },
        { name: 'Blog', icon: '📝', path: '#blog' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                                <span className="text-2xl">🎥</span>
                            </div>
                            <span className="text-xl font-bold text-white hidden sm:block">VideoCall</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-8">
                        <a href="#features" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-pink-400">
                            Features
                        </a>
                        <button
                            onClick={() => navigate('/pricing')}
                            className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-pink-400"
                        >
                            Pricing
                        </button>

                        {/* Resources Dropdown */}
                        <div className="relative" ref={resourcesMenuRef}>
                            <button
                                onClick={() => setShowResourcesMenu(!showResourcesMenu)}
                                className="flex items-center gap-1 text-base font-medium text-gray-300 transition-all duration-200 hover:text-pink-400"
                            >
                                Resources
                                <svg className={`w-4 h-4 transition-transform ${showResourcesMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {showResourcesMenu && (
                                <div className="absolute right-0 mt-3 w-56 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-xl overflow-hidden animate-slide-up">
                                    {resourcesLinks.map((link, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (link.path.startsWith('#')) {
                                                    window.location.href = link.path;
                                                } else {
                                                    navigate(link.path);
                                                    setShowResourcesMenu(false);
                                                }
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-pink-400 transition-all text-left"
                                        >
                                            <span className="text-xl">{link.icon}</span>
                                            <span className="text-sm font-medium">{link.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick Action Button */}
                        <button
                            onClick={createInstantRoom}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            <span>⚡</span>
                            Quick Start
                        </button>
                    </div>

                    {/* Auth Buttons / User Menu */}
                    <div className="hidden lg:flex lg:items-center lg:ml-4 lg:space-x-3">
                        {isAuthenticated ? (
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-pink-500/50 transition-all"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {user?.username?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                    <span className="text-gray-300 font-medium">{user?.username}</span>
                                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-3 w-56 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-xl overflow-hidden animate-slide-up">
                                        <div className="px-4 py-3 border-b border-gray-700/50">
                                            <p className="text-sm text-gray-400">Signed in as</p>
                                            <p className="text-sm font-semibold text-white truncate">{user?.email}</p>
                                        </div>
                                        <button onClick={() => { navigate('/profile'); setShowUserMenu(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-pink-400 transition-all text-left">
                                            <span className="text-xl">👤</span>
                                            <span className="text-sm font-medium">Profile</span>
                                        </button>
                                        <button onClick={() => { navigate('/settings'); setShowUserMenu(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-pink-400 transition-all text-left">
                                            <span className="text-xl">⚙️</span>
                                            <span className="text-sm font-medium">Settings</span>
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700/50 transition-all border-t border-gray-700/50"
                                        >
                                            <span className="text-xl">🚪</span>
                                            <span className="text-sm font-medium">Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={handleLogin}
                                    className="px-5 py-2.5 text-sm font-semibold text-gray-300 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg hover:border-pink-500/50 hover:text-white transition-all"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={handleSignup}
                                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {expanded ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {expanded && (
                    <nav className="lg:hidden pt-4 pb-6 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-xl mt-2 mb-4 animate-slide-up">
                        <div className="flex flex-col px-6 space-y-1">
                            <a href="#features" className="py-3 text-base font-medium text-gray-300 hover:text-pink-400 transition-colors">Features</a>
                            <button
                                onClick={() => {
                                    navigate('/pricing');
                                    setExpanded(false);
                                }}
                                className="w-full text-left py-3 text-base font-medium text-gray-300 hover:text-pink-400 transition-colors"
                            >
                                Pricing
                            </button>
                            {resourcesLinks.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (link.path.startsWith('#')) {
                                            window.location.href = link.path;
                                        } else {
                                            navigate(link.path);
                                            setExpanded(false);
                                        }
                                    }}
                                    className="w-full flex items-center gap-3 py-3 text-base font-medium text-gray-300 hover:text-pink-400 transition-colors text-left"
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.name}</span>
                                </button>
                            ))}
                        </div>

                        <div className="px-6 mt-6 flex flex-col space-y-3">
                            <button
                                onClick={createInstantRoom}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all"
                            >
                                <span>⚡</span>
                                Quick Start
                            </button>

                            {isAuthenticated ? (
                                <>
                                    <div className="px-4 py-3 bg-gray-700/30 rounded-lg">
                                        <p className="text-sm text-gray-400">Signed in as</p>
                                        <p className="text-sm font-semibold text-white truncate">{user?.email}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-base font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={handleLogin}
                                        className="w-full px-4 py-3 text-base font-semibold text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={handleSignup}
                                        className="w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
