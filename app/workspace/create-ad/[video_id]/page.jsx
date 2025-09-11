"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Script from './_components/Script';
import React, { useEffect } from 'react'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import UploadFiles from './_components/UploadFiles';
import GetAvatar from './_components/GetAvatar';

import { Button } from '@/components/ui/button';
import { Files, Sparkle } from 'lucide-react';
import ImageKit from 'imagekit';

import GetVoice from './_components/GetVoice';


function CreateVideo() {
    const { video_id } = useParams();
    const [videoData, setVideoData] = useState();
    const [isGenerateButtonClick, setIsGenerateButtonClick] = useState(false);
    // const VideoData=useQuery(api.videoData.GetVideoDataById,{
    //     vid:video_id
    // });

    const imageKit=new ImageKit({
        publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL
    });
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
        console.log(videoData);
    }

    const GenerateVideo=async ()=>{
        //upload the Image
        const rawImages=videoData.rawFiles;
        let uploadedFiles=[];
        // rawFiles.forEach(async(file) => {
        //     const imageRef=await imageKit.upload({
        //         file:file,
        //         fileName:Date.now().toString()+".png",
        //         isPublished:true
        //     }) 
        //     console.log(imageRef.url);
        //     uploadedFiles.push(imageRef.url);
            
        // });

        const uploadPromises=rawFiles.map(async(file)=>
        await imageKit.upload({
               file:file,
                fileName:Date.now().toString()+".png",
                isPublished:true
         }) 
    );

        try{
            const uploadedFilesPromise=await Promise.all(uploadPromises);
            const uploadedFiles=uploadedFilesPromise.map((imageRef) => imageRef.url);
            console.log(uploadedFiles);
            onHandleInputChange('assests', uploadedFiles);
        }catch(e){
            console.error("Error", e);
        }
        
    //generate voice = generate avatar
    }

   
    return (
        <div className='p-6 md:p-10'>
            <h2 className='font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>Create Video Ad</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-12'>
                <div className='lg:col-span-2 flex flex-col gap-6'>
                    <Script videoData={videoData} onHandleInputChange={onHandleInputChange} />

                    <UploadFiles videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <GetAvatar videoData={videoData} onHandleInputChange={onHandleInputChange} />

                    <VoiceList videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <Button className={'mt-7 w-full'} onClick={GenerateVideo}> <Sparkle /> Generate </Button>

                    <GetVoice videoData={videoData} onHandleInputChange={onHandleInputChange} />

                </div>
                <div className='text-white'>
                    Preview
                </div>
            </div>
        </div>
    )
}

export default CreateVideo
