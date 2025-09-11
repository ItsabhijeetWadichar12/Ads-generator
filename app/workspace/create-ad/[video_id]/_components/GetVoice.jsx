import axios from 'axios';
import { Mic } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function GetVoice({ videoData, onHandleInputChange }) {
    const [voiceList, setVoiceList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetVoiceList();
    }, []);

    const GetVoiceList = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/get-audio');

            if (response?.data) {
                console.log('Voice data:', response.data);
                setVoiceList(Array.isArray(response.data) ? response.data : []);
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

    return (
        <div className='p-5 mt-3 shadow rounded-xl bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <h2 className='font-bold text-xl flex items-center gap-3'>
                <Mic className='p-2 bg-gradient-to-r from-red-400 to-blue-500 text-white h-10 w-10 rounded-lg shadow-md' />
                Select Voice
            </h2>
            <hr className='my-3' />
            <div>
                <label className="text-sm text-slate-300">Choose a voice for your video</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
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
                                key={voice._id}
                                onClick={() => onHandleInputChange('voice', voice)}
                                className={`group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:scale-105 ${videoData?.voice?.id === voice.id
                                    ? 'border-2 border-blue-500 bg-blue-900/20'
                                    : 'border border-slate-700 hover:border-blue-500/50'
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-2 overflow-auto ">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <Mic className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-medium text-sm">{voice.name}</h3>
                                        <p className="text-xs text-slate-400">{voice.language}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default GetVoice;