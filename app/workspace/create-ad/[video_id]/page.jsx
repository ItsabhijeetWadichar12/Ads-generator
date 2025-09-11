"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Script from './_components/Script';
import React, { useEffect } from 'react'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import UploadFiles from './_components/UploadFiles';
import GetAvatar from './_components/GetAvatar';

function CreateVideo() {
    const { video_id } = useParams();
    const [videoData, setVideoData] = useState();
    // const VideoData=useQuery(api.videoData.GetVideoDataById,{
    //     vid:video_id
    // });
    const convex = useConvex();

    useEffect(() => {
        GetVideoData();
    }, [])
    const GetVideoData = async () => {
        const result = await convex.query(api.videoData.GetVideoDataById, {
            vid: video_id
        });
        console.log(result);
        setVideoData(result);
    }

    const onHandleInputChange = (field, value) => {
        setVideoData((prev) => ({
            ...prev,
            [field]: value
        }))
    }
    return (
        <div className='p-6 md:p-10'>
            <h2 className='font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>Create Video Ad</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-12'>
                <div className='lg:col-span-2 flex flex-col gap-6'>
                    <Script videoData={videoData} onHandleInputChange={onHandleInputChange} />

                    <UploadFiles videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <GetAvatar />

                </div>
                <div className='text-white'>
                    Preview
                </div>
            </div>
        </div>
    )
}

export default CreateVideo
