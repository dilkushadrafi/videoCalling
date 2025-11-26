import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Community = () => {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();
    const [activeTab, setActiveTab] = useState('discussions');

    const stats = [
        { label: 'Members', value: '10,000+', icon: '👥', color: 'from-blue-500 to-cyan-500' },
        { label: 'Discussions', value: '5,000+', icon: '💬', color: 'from-purple-500 to-pink-500' },
        { label: 'Solutions', value: '3,000+', icon: '✅', color: 'from-green-500 to-emerald-500' },
        { label: 'Active Today', value: '500+', icon: '🔥', color: 'from-orange-500 to-red-500' }
    ];

    const discussions = [
        {
            title: 'How to improve video quality on slow connections?',
            author: 'Sarah Johnson',
            avatar: 'S',
            category: 'Technical',
            replies: 24,
            views: 156,
            time: '2 hours ago',
            solved: true
        },
        {
            title: 'Best practices for large group calls',
            author: 'Mike Chen',
            avatar: 'M',
            category: 'Tips & Tricks',
            replies: 18,
            views: 203,
            time: '5 hours ago',
            solved: false
        },
        {
            title: 'Feature request: Virtual backgrounds',
            author: 'Emma Davis',
            avatar: 'E',
            category: 'Feature Requests',
            replies: 42,
            views: 389,
            time: '1 day ago',
            solved: false
        },
        {
            title: 'Screen sharing not working on Safari',
            author: 'John Smith',
            avatar: 'J',
            category: 'Technical',
            replies: 12,
            views: 98,
            time: '2 days ago',
            solved: true
        },
        {
            title: 'Integration with calendar apps',
            author: 'Lisa Anderson',
            avatar: 'L',
            category: 'Feature Requests',
            replies: 31,
            views: 267,
            time: '3 days ago',
            solved: false
        }
    ];

    const categories = [
        { name: 'General Discussion', icon: '💬', count: 1234, color: 'from-blue-500 to-cyan-500' },
        { name: 'Technical Support', icon: '🔧', count: 856, color: 'from-red-500 to-orange-500' },
        { name: 'Feature Requests', icon: '✨', count: 432, color: 'from-purple-500 to-pink-500' },
        { name: 'Tips & Tricks', icon: '💡', count: 678, color: 'from-yellow-500 to-orange-500' },
        { name: 'Announcements', icon: '📢', count: 89, color: 'from-green-500 to-emerald-500' },
        { name: 'Show & Tell', icon: '🎨', count: 234, color: 'from-pink-500 to-rose-500' }
    ];

    const topContributors = [
        { name: 'Alex Thompson', avatar: 'A', points: 2450, badge: '🏆' },
        { name: 'Maria Garcia', avatar: 'M', points: 1890, badge: '🥈' },
        { name: 'David Lee', avatar: 'D', points: 1567, badge: '🥉' },
        { name: 'Sophie Martin', avatar: 'S', points: 1234, badge: '⭐' },
        { name: 'James Wilson', avatar: 'J', points: 987, badge: '⭐' }
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
                            Community
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Connect with other users, share ideas, and get help from the community
                        </p>

                        {isAuthenticated ? (
                            <button className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg">
                                Start a Discussion
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate('/signup')}
                                className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Join the Community
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-center">
                                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto`}>
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Tabs */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => setActiveTab('discussions')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'discussions'
                                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                    }`}
                            >
                                Recent Discussions
                            </button>
                            <button
                                onClick={() => setActiveTab('trending')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'trending'
                                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                    }`}
                            >
                                Trending
                            </button>
                        </div>

                        {/* Discussions */}
                        <div className="space-y-4 animate-slide-up">
                            {discussions.map((discussion, index) => (
                                <div key={index} className="relative group cursor-pointer">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                    <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                                {discussion.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                                                        {discussion.title}
                                                        {discussion.solved && (
                                                            <span className="ml-2 text-green-400">✓</span>
                                                        )}
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                                    <span>{discussion.author}</span>
                                                    <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                                                        {discussion.category}
                                                    </span>
                                                    <span>💬 {discussion.replies} replies</span>
                                                    <span>👁️ {discussion.views} views</span>
                                                    <span>{discussion.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Categories */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                            <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            className="w-full flex items-center justify-between p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all group/item"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{category.icon}</span>
                                                <span className="text-gray-300 font-medium group-hover/item:text-pink-400 transition-colors">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <span className="text-gray-500 text-sm">{category.count}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Top Contributors */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                            <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Top Contributors</h3>
                                <div className="space-y-3">
                                    {topContributors.map((contributor, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all cursor-pointer"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {contributor.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-gray-300 font-medium truncate">{contributor.name}</div>
                                                <div className="text-gray-500 text-sm">{contributor.points} points</div>
                                            </div>
                                            <span className="text-2xl">{contributor.badge}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Community;
