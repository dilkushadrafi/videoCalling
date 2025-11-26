import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function VideoComp() {
    const { roomID } = useParams();
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const { user, isAuthenticated, loading } = useAuth();
    const jitsiApiRef = useRef(null);

    useEffect(() => {
        if (loading) return;

        // Redirect to login if not authenticated
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        // Load Jitsi Meet External API script
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;

        script.onload = () => {
            if (!containerRef.current) return;

            const domain = 'meet.element.io';
            // Create a unique room name to avoid collisions on the public server
            // Using a prefix like 'MyVideoApp-' helps
            const roomName = `VideoCallApp-${roomID}`;

            const options = {
                roomName: roomName,
                width: '100%',
                height: '100%',
                parentNode: containerRef.current,
                userInfo: {
                    displayName: user?.username || user?.email?.split('@')[0] || 'Guest',
                    email: user?.email
                },
                configOverwrite: {
                    startWithAudioMuted: false,
                    startWithVideoMuted: false,
                    prejoinPageEnabled: false, // Skip the pre-join page for smoother entry
                },
                interfaceConfigOverwrite: {
                    SHOW_JITSI_WATERMARK: false,
                    TOOLBAR_BUTTONS: [
                        'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                        'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                        'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                        'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
                        'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
                        'security'
                    ],
                },
            };

            // Initialize Jitsi Meet API
            // eslint-disable-next-line no-undef
            jitsiApiRef.current = new window.JitsiMeetExternalAPI(domain, options);

            // Add allow attribute to the iframe to ensure permissions work
            const iframe = containerRef.current.querySelector('iframe');
            if (iframe) {
                iframe.allow = "camera; microphone; fullscreen; display-capture; autoplay; clipboard-write";
            }

            // Handle meeting end
            jitsiApiRef.current.addEventListeners({
                videoConferenceLeft: () => {
                    navigate('/'); // Go back to home when call ends
                },
            });
        };

        document.body.appendChild(script);

        // Cleanup
        return () => {
            if (jitsiApiRef.current) {
                jitsiApiRef.current.dispose();
            }
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [loading, isAuthenticated, navigate, roomID, user]);

    const [copySuccess, setCopySuccess] = React.useState('');

    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
                <div className="text-xl font-semibold text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-900">
            <div className="flex items-center justify-between px-6 py-3 bg-gray-800 text-white shadow-md z-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold">Room: <span className="text-blue-400">{roomID}</span></h2>
                </div>
                <div className="flex items-center gap-3">
                    {copySuccess && <span className="text-green-400 text-sm font-medium animate-fade-in">{copySuccess}</span>}
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy Link
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        Exit
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                className="flex-1 w-full relative"
                style={{ background: '#1f2937' }}
            ></div>
        </div>
    );
}

export default VideoComp;
