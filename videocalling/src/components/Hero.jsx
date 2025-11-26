import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Hero() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/room/${input}`);
    }
  };

  const createInstantRoom = () => {
    const randomRoomId = Math.random().toString(36).substring(2, 10);
    navigate(`/room/${randomRoomId}`);
  };

  const features = [
    {
      icon: "🎥",
      title: "HD Video Quality",
      description: "Crystal clear video calls with adaptive quality"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "End-to-end encrypted conversations"
    },
    {
      icon: "🌐",
      title: "No Downloads",
      description: "Works directly in your browser"
    },
    {
      icon: "👥",
      title: "Group Calls",
      description: "Connect with unlimited participants"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-400"></div>
      </div>

      <section className="relative pt-16 pb-20 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">

            {/* Left Column - Content */}
            <div className="animate-fade-in">
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-pink-400 bg-pink-500/10 rounded-full border border-pink-500/20 animate-slide-up">
                  <span className="w-2 h-2 mr-2 bg-pink-400 rounded-full animate-pulse"></span>
                  Free Forever •
                </div>

                <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl font-pj animate-slide-up delay-100">
                  Connect With
                  <span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                    Anyone, Anywhere
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 sm:mt-8 font-inter animate-slide-up delay-200">
                  Experience seamless video calling with crystal-clear quality.
                  Start instant meetings, share your screen, and collaborate in real-time.
                </p>

                {/* Join Room Form */}
                <form onSubmit={submitHandler} className="mt-10 sm:mt-12 animate-slide-up delay-300">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative flex flex-col sm:flex-row gap-3 p-2 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter Room ID or Name"
                        className="flex-1 px-6 py-4 text-white placeholder-gray-400 bg-gray-900/50 border border-gray-700 outline-none rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                        required
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/50"
                      >
                        Join Room
                      </button>
                    </div>
                  </div>
                </form>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-slide-up delay-400">
                  <button
                    onClick={createInstantRoom}
                    className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:bg-gray-700/50 hover:border-pink-500/50 transition-all duration-200"
                  >
                    <span className="text-xl">⚡</span>
                    Create Instant Room
                  </button>
                  {!isAuthenticated && (
                    <button
                      onClick={() => navigate('/signup')}
                      className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                    >
                      <span className="text-xl">🚀</span>
                      Sign Up Free
                    </button>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400 mt-1">Free</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">∞</div>
                    <div className="text-sm text-gray-400 mt-1">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">HD</div>
                    <div className="text-sm text-gray-400 mt-1">Quality</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="relative animate-fade-in delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
                <img
                  className="relative w-full animate-float"
                  src="https://static.vecteezy.com/system/resources/previews/010/871/586/non_2x/3d-video-call-via-laptop-illustration-png.png"
                  alt="Video Call Illustration"
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-4 animate-slide-up delay-400">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
