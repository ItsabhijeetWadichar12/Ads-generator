import axios from 'axios';
import { User } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function GetAvatar({ videoData, onHandleInputChange }) {
    const [avatarList, setAvatarList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetAvatarList();
    }, []);

    const GetAvatarList = async () => {
        try {
            setLoading(true);
            const result = await axios.get('/api/get-avatar');
            const data = result?.data?.result;
            console.log(data);
            setAvatarList(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching avatars:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-5 mt-3 shadow rounded-xl bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <h2 className='font-bold text-xl flex items-center gap-3'>
                <User className='p-2 bg-gradient-to-r from-red-400 to-blue-500 text-white h-10 w-10 rounded-lg shadow-md' />
                Select Avatar
            </h2>
            <hr className='my-3' />
            <div>
                <label htmlFor="0">Select your fav avatar for video ads</label>
                <div className="flex flex-wrap gap-6 overflow-auto h-[200px]">
                    {loading ? (
                        <div>Loading avatars...</div>
                    ) : avatarList.length === 0 ? (
                        <div>No avatars available</div>
                    ) : (
                        avatarList.map((avatar, index) => (
                            avatar?.thumbnailUrl ? (
                                <div
                                    key={index}
                                    onClick={() => onHandleInputChange('avatar', avatar)}
                                    className={`group cursor-pointer p-2 rounded-lg transition-all duration-300 hover:scale-105 ${videoData?.avatar?._id === avatar?._id
                                            ? 'border-2 border-blue-500 bg-blue-900/20'
                                            : 'border border-transparent hover:border-blue-500/50'
                                        }`}
                                >
                                    <Image
                                        src={avatar.thumbnailUrl}
                                        alt={`Avatar ${index + 1}`}
                                        width={100}
                                        height={100}
                                        className=" bg-black rounded-lg"
                                    />
                                    <h2 className='text-center'>{avatar?.name}</h2>
                                </div>
                            ) : null
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default GetAvatar;