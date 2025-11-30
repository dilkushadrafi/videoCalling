import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus(''), 3000)
      return
    }

    if (!emailRegex.test(email)) {
      setSubscribeStatus('invalid')
      setTimeout(() => setSubscribeStatus(''), 3000)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setSubscribeStatus(''), 5000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden pt-20 pb-10">
      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                VideoCall
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
              Experience the future of communication. Crystal clear video, immersive audio, and seamless collaboration tools.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              {['twitter', 'facebook', 'instagram', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" fillOpacity="0.1" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 inline-block">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Enterprise', 'Security', 'Download'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 inline-block">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 inline-block">Stay Connected</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="relative w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            <div className="h-6">
              {subscribeStatus === 'success' && (
                <p className="text-sm text-green-400 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Successfully subscribed!
                </p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-sm text-red-400 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Please enter your email
                </p>
              )}
              {subscribeStatus === 'invalid' && (
                <p className="text-sm text-red-400 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Please enter a valid email
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VideoCall. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors duration-200">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
