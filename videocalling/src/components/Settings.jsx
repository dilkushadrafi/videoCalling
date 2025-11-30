import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                    <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                        Settings
                    </h1>

                    <div className="space-y-8">
                        {/* Preferences Section */}
                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-gray-200">Preferences</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                                    <div>
                                        <h3 className="font-medium">Push Notifications</h3>
                                        <p className="text-sm text-gray-400">Receive notifications about incoming calls</p>
                                    </div>
                                    <button
                                        onClick={() => setNotifications(!notifications)}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-green-500' : 'bg-gray-600'}`}
                                    >
                                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${notifications ? 'left-7' : 'left-1'}`} />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                                    <div>
                                        <h3 className="font-medium">Dark Mode</h3>
                                        <p className="text-sm text-gray-400">Use dark theme across the application</p>
                                    </div>
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-purple-500' : 'bg-gray-600'}`}
                                    >
                                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${darkMode ? 'left-7' : 'left-1'}`} />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Account Section */}
                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-gray-200">Account</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                                    <h3 className="font-medium mb-4">Change Password</h3>
                                    <div className="space-y-3">
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                        />
                                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm font-medium">
                                            Update Password
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-red-900/20 rounded-xl border border-red-900/50">
                                    <div>
                                        <h3 className="font-medium text-red-400">Delete Account</h3>
                                        <p className="text-sm text-gray-400">Permanently remove your account and data</p>
                                    </div>
                                    <button className="px-4 py-2 bg-red-600/20 text-red-400 hover:bg-red-600/30 rounded-lg transition-colors text-sm font-medium border border-red-600/50">
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Settings;
