import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: user?.username || '',
        email: user?.email || ''
    });

    // Update formData when user data loads
    React.useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || '',
                email: user.email || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Here you would typically call an API to update the user profile
        console.log('Saving profile:', formData);
        // For now, we'll just exit edit mode
        setIsEditing(false);
        // You might want to update the local user context here as well
    };

    const handleCancel = () => {
        // Reset form data to original user data
        setFormData({
            username: user?.username || '',
            email: user?.email || ''
        });
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Avatar Section */}
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                                {formData.username.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <span className="text-sm font-medium">Change</span>
                            </div>
                        </div>

                        {/* User Info / Edit Form */}
                        <div className="flex-1 text-center md:text-left space-y-4 w-full">
                            {isEditing ? (
                                <div className="space-y-4 max-w-md mx-auto md:mx-0">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            disabled
                                            className="w-full px-4 py-2 bg-gray-900/30 border border-gray-700 rounded-lg text-gray-400 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                                        {formData.username || 'User Name'}
                                    </h1>
                                    <p className="text-gray-400 mt-1">{formData.email || 'user@example.com'}</p>
                                </div>
                            )}

                            {!isEditing && (
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <div className="px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/50">
                                        <span className="text-sm text-gray-400">Account Type</span>
                                        <p className="font-semibold text-pink-400">Free Plan</p>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/50">
                                        <span className="text-sm text-gray-400">Member Since</span>
                                        <p className="font-semibold text-purple-400">Nov 2023</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 min-w-[120px]">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleSave}
                                        className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-xl transition-all font-medium shadow-lg"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors font-medium"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors font-medium"
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl mb-2">📞</div>
                            <div className="text-2xl font-bold">{user?.totalCalls || 0}</div>
                            <div className="text-sm text-gray-400">Total Calls</div>
                        </div>
                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl mb-2">⏱️</div>
                            <div className="text-2xl font-bold">{user?.callDuration || 0}m</div>
                            <div className="text-sm text-gray-400">Call Duration</div>
                        </div>
                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl mb-2">👥</div>
                            <div className="text-2xl font-bold">{user?.contacts || 0}</div>
                            <div className="text-sm text-gray-400">Contacts</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
