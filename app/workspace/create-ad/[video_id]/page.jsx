"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Script from './_components/Script';
import React, { useEffect } from 'react'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';

function CreateVideo() {
    const {video_id}= useParams();
    const [videoData,setVideoData]=useState();
    // const VideoData=useQuery(api.videoData.GetVideoDataById,{
    //     vid:video_id
    // });
   const convex=useConvex();

    useEffect(()=>{
    GetVideoData();
    }, [])
   const GetVideoData=async()=>{
    const result=await convex.query(api.videoData.GetVideoDataById,{
        vid:video_id
    });
    console.log(result);
    setVideoData(result);
   }
      
   const onHandleInputChange=(field,value)=>{
    setVideoData((prev)=>( {
        ...prev,
        [field]:value}))
   }
  return (
    <div className='p-6 md:p-8'>
        <h2 className='font-bold text-2xl text-white'>Create Video Ad</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-12'>
            <div className='lg:col-span-2'>
               <Script videoData={videoData} onHandleInputChange={onHandleInputChange}/>
            </div>
            <div className='text-white'>
                Preview
            </div>
        </div>
    </div>
  )
}

export default CreateVideo
