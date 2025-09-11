import axios from 'axios';
import { Mars, Mic, Pause, Play, Venus } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

const INDIAN_LANGUAGES = ['English (India)', 'Hindi (India)', 'Marathi (India)', 'Bengali (India)', 'Tamil (India)', 'Telugu (India)'];

function GetVoice({ videoData, onHandleInputChange }) {
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
            const response = await axios.get('/api/get-audio');

            if (response?.data) {
                const indianVoices = response.data
                    .filter(voice => INDIAN_LANGUAGES.some(lang =>
                        voice.language?.includes(lang)
                    ))
                    .map((voice, index) => ({
                        ...voice,
                        uniqueId: voice.id || `voice-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
                    }));

                console.log('Indian voices:', indianVoices);
                setVoiceList(indianVoices);

                if (indianVoices.length === 0) {
                    setError('No Indian language voices available');
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
        <div className='p-5 mt-3 shadow rounded-xl bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <div className="flex items-center justify-between mb-3">
                <h2 className='font-bold text-xl flex items-center gap-3'>
                    <Mic className='p-2 bg-gradient-to-r from-red-400 to-blue-500 text-white h-10 w-10 rounded-lg shadow-md' />
                    Select Indian Voice
                </h2>
                {isPlaying && (
                    <button
                        onClick={handleStopAll}
                        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Pause className="w-4 h-4" />
                        Stop Preview
                    </button>
                )}
            </div>
            <hr className='my-3' />
            <div>
                <div className="mt-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-700/30 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {loading ? (
                            <div className="col-span-full text-center py-4 text-slate-400">
                                Loading Indian voices...
                            </div>
                        ) : error ? (
                            <div className="col-span-full text-center py-4 text-red-400">
                                {error}
                            </div>
                        ) : voiceList.length === 0 ? (
                            <div className="col-span-full text-center py-4 text-slate-400">
                                No Indian voices available
                            </div>
                        ) : (
                            voiceList.map((voice) => (
                                <div
                                    key={voice.uniqueId}
                                    onClick={() => onHandleInputChange('voice', voice)}
                                    className={`group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:scale-105 ${videoData?.voice?.uniqueId === voice.uniqueId
                                        ? 'border-2 border-blue-500 bg-blue-900/20'
                                        : 'border border-slate-700 hover:border-blue-500/50'
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                                <button
                                                    onClick={(e) => handlePlayPreview(voice, e)}
                                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                                    disabled={!voice.preview}
                                                >
                                                    {playingVoiceId === voice.uniqueId ? (
                                                        isPlaying ? (
                                                            <Pause className="w-6 h-6 text-white" />
                                                        ) : (
                                                            <Play className="w-6 h-6 text-white" />
                                                        )
                                                    ) : (
                                                        <Play className="w-6 h-6 text-white" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-medium text-sm">
                                                {formatVoiceName(voice.name)}
                                            </h3>
                                            <p className="text-xs text-slate-400">
                                                {formatLanguage(voice.language)}
                                            </p>
                                            <span className='text-sm items-center'>
                                                {voice.gender === "Male" ? <Mars /> : <Venus />}
                                            </span>
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

export default GetVoice;