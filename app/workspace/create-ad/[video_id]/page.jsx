"use client"
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Script from './_components/Script';
import React, { useEffect } from 'react'
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import UploadFiles from './_components/UploadFiles';
import GetAvatar from './_components/GetAvatar';

import { Button } from '@/components/ui/button';
import { Files, Sparkle } from 'lucide-react';
import ImageKit from 'imagekit';

import GetVoice from './_components/GetVoice';
import axios from 'axios';


function CreateVideo() {
    const { video_id } = useParams();
    const [videoData, setVideoData] = useState();
    const [isGenerateButtonClick, setIsGenerateButtonClick] = useState(false);
    const VidioDataToDb = useMutation(api?.videoData?.UpdateVideoData);

    const router = useRouter();
    // const VideoData=useQuery(api.videoData.GetVideoDataById,{
    //     vid:video_id
    // });

    const imageKit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL
    })
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

    useEffect(async () => {
        if (videoData?.videoUrl) {
            const result = await VidioDataToDb({
                topic: videoData?.topic,
                scriptVariant: videoData?.scriptVariant,
                script: videoData?.script,
                videodataID: video_id,
                assest: field === 'assets' ? value : videoData?.assets,
                avatar: field === 'avatar' ? value : videoData?.avatar,
                voice: field === 'voice' ? value : videoData?.voice,
                voiceUrl: field === 'voiceUrl' ? value : videoData?.voiceUrl,
            });

            console.log(result);
            router.replace('/workspace');
        }
    }, [videoData?.videoUrl])

    const onHandleInputChange = async (field, value) => {
        setVideoData((prev) => ({
            ...prev,
            [field]: value
        }))
        console.log(videoData);

    }

    const GenerateVideo = async () => {
        try {
            setIsGenerateButtonClick(true);
            const rawFiles = videoData?.rawFiles;
            // if (!rawFiles?.length) {
            //     console.error('No files to upload');
            //     return;
            // }

            let uploadedFiles = [];
            for (const file of rawFiles) {
                try {
                    const imageRef = await imageKit.upload({
                        file: file,
                        fileName: `${Date.now()}-${file.name}`, // Fixed date usage
                        folder: "/ads-images",
                        isPublished: true
                    });
                    console.log('Uploaded image:', imageRef.url);
                    uploadedFiles.push(imageRef.url);
                } catch (uploadError) {
                    console.error('Error uploading file:', uploadError);
                }
            }

            onHandleInputChange('assets', uploadedFiles);
            // TODO: generate voice + generate avatar

            const result = await axios.post('/api/create-voice', {
                script: videoData?.script,
                voiceId: videoData?.voice?.voice_id
            });
            console.log('Voice generation result:', result?.data?.audioUrl);
            onHandleInputChange('voiceUrl', result?.data?.audioUrl);

            // call through the engest api 

            const avatarResult = await axios.post('/api/create-avatar', {
                avatarId: videoData?.avatar?.avatar_id,
                voiceUrl: "https://drz0f01yeq1cx.cloudfront.net/1757865258386-f6205a87a30e4430b3edd9c440ad6b11-audio.mp3"
            })
            console.log('Avatar generation result:', avatarResult?.data);
            onHandleInputChange('videoUrl', avatarResult?.data?.avatarVideoUrl);
            setIsGenerateButtonClick(false);


        } catch (error) {
            console.error('Generate video error:', error);
        } finally {
            setIsGenerateButtonClick(false);
        }
    };

    return (
        <div className='p-6 md:p-10'>
            <h2 className='font-extrabold text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>Create Video Ad</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-12'>
                <div className='lg:col-span-2 flex flex-col gap-6'>
                    <Script videoData={videoData} onHandleInputChange={onHandleInputChange} />

                    <UploadFiles videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <GetAvatar videoData={videoData} onHandleInputChange={onHandleInputChange} />

                    <GetVoice videoData={videoData} onHandleInputChange={onHandleInputChange} />
                    <Button
                        className={'mt-7 w-full'}
                        onClick={GenerateVideo}
                        disabled={isGenerateButtonClick}
                    >
                        {isGenerateButtonClick ? (
                            <>Processing...</>
                        ) : (
                            <><Sparkle /> Generate</>
                        )}
                    </Button>


                </div>
                <div className='text-white'>
                    Preview
                </div>
            </div>
        </div>
    )
}

export default CreateVideo
