import axios from 'axios';
import { Mars, Mic, Pause, Play, Venus } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

const INDIAN_LANGUAGES = ['English (India)', 'Hindi (India)', 'Marathi (India)', 'Bengali (India)', 'Tamil (India)', 'Telugu (India)'];

function VoiceList({ videoData, onHandleInputChange }) {
    const [voiceList, setVoiceList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [playingVoiceId, setPlayingVoiceId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        GetVoiceList();
    }, []);

    const GetVoiceList = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/get-voice-list');

            if (response?.data) {
                // Add unique IDs to each voice for reliable tracking
                const voicesWithIds = response.data.map((voice, index) => ({
                    ...voice,
                    uniqueId: voice.id || voice._id || `voice-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
                }));

                // Filter for Indian voices if language info is available
                const indianVoices = voicesWithIds.filter(voice =>
                    !voice.language || // Keep voices without language info
                    INDIAN_LANGUAGES.some(lang =>
                        voice.language?.includes(lang)
                    )
                );

                console.log('Voices loaded:', indianVoices);
                setVoiceList(indianVoices);

                if (indianVoices.length === 0) {
                    setError('No voices available');
                }
            } else {
                setError('No voices available');
            }
        } catch (error) {
            console.error('Error fetching voices:', error);
            setError(error.response?.data?.error || 'Failed to load voices');
        } finally {
            setLoading(false);
        }
    };

    const handlePlayPreview = async (voice, e) => {
        e.stopPropagation(); // Prevent voice selection when clicking play button

        if (playingVoiceId === voice.uniqueId) {
            // Pause/Stop playing
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.error('Error resuming audio:', error);
                }
            }
        } else {
            // Start playing new voice
            if (voice.preview) {
                try {
                    // Stop current audio if playing
                    if (isPlaying) {
                        audioRef.current.pause();
                    }
                    audioRef.current.src = voice.preview;
                    await audioRef.current.play();
                    setPlayingVoiceId(voice.uniqueId);
                    setIsPlaying(true);
                } catch (error) {
                    console.error('Error playing audio:', error);
                }
            }
        }
    };

    const handleAudioEnded = () => {
        setPlayingVoiceId(null);
        setIsPlaying(false);
    };

    const handleStopAll = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setPlayingVoiceId(null);
            setIsPlaying(false);
        }
    };

    // Format language display
    const formatLanguage = (language) => {
        return language?.replace(' (India)', '') || 'Unknown Language';
    };

    // Format voice name
    const formatVoiceName = (name) => {
        return name || 'Unnamed Voice';
    };

    return (
        <div className='p-5 shadow rounded-xl mt-6 bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <div className="flex items-center justify-between mb-3">
                <h2 className='font-bold text-lg flex items-center gap-3'>
                    <Mic className='p-2 bg-gradient-to-r from-red-400 to-blue-500 text-white h-10 w-10 rounded-lg shadow-md' />
                    Select Voice
                </h2>
                {isPlaying && (
                    <button
                        onClick={handleStopAll}
                        className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Pause className="w-4 h-4" />
                        Stop Preview
                    </button>
                )}
            </div>
            <hr className='my-3' />
            <div>
                <label className="text-gray-300">Select Voice for your video ad</label>
                <div className="mt-4 max-h-[300px] overflow-y-auto pr-2">
                    <div className="grid grid-cols-2 gap-4">
                        {loading ? (
                            <div className="col-span-full text-center py-4 text-slate-400">
                                Loading voices...
                            </div>
                        ) : error ? (
                            <div className="col-span-full text-center py-4 text-red-400">
                                {error}
                            </div>
                        ) : voiceList.length === 0 ? (
                            <div className="col-span-full text-center py-4 text-slate-400">
                                No voices available
                            </div>
                        ) : (
                            voiceList.map((voice) => (
                                <div
                                    key={voice.uniqueId}
                                    onClick={() => onHandleInputChange('voice', voice)}
                                    className={`group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:scale-105 ${videoData?.voice?._id === voice._id || videoData?.voice?.uniqueId === voice.uniqueId
                                            ? 'border-2 border-blue-500 bg-blue-900/20'
                                            : 'border border-slate-700 hover:border-blue-500/50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-3 items-center">
                                            <button
                                                onClick={(e) => handlePlayPreview(voice, e)}
                                                className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                                                disabled={!voice.preview}
                                            >
                                                {playingVoiceId === voice.uniqueId ? (
                                                    isPlaying ? (
                                                        <Pause className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <Play className="w-4 h-4 text-white" />
                                                    )
                                                ) : (
                                                    <Play className="w-4 h-4 text-white" />
                                                )}
                                            </button>
                                            <div>
                                                <h3 className="font-medium text-sm">
                                                    {formatVoiceName(voice.name)}
                                                </h3>
                                                <p className="text-xs text-slate-400">
                                                    {formatLanguage(voice.language || voice.accent)}
                                                    {voice.description ? ` (${voice.description})` : ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {voice.gender === "Male" ? (
                                                <Mars className="text-blue-400 h-4 w-4" />
                                            ) : (
                                                <Venus className="text-pink-400 h-4 w-4" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <audio
                ref={audioRef}
                onEnded={handleAudioEnded}
                onError={(e) => {
                    console.error('Audio error:', e);
                    setPlayingVoiceId(null);
                    setIsPlaying(false);
                }}
                className="hidden"
            />
        </div>
    );
}

export default VoiceList;