import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { avatarId, voiceUrl } = await req.json();

    //get Avatar Generated ID


    //     create_time
    // : 
    // 1757866624392
    // task_id
    // : 
    // "68c6ea805a6044d44d249237"
    // uid
    // : 
    // 15457350
    // video
    // : 
    // ""
    // video_id
    // : 
    // "507d9fcb-7e08-4ed6-af17-5be9324d4f75"
    // video_status
    // : 
    // 1
    // _id
    // : 
    // "68c6ea80f0eec691e9056319"
    const result = await axios.post('https://openapi.akool.com/api/open/v3/talkingavatar/create', {

        "width": 3840,
        "height": 2160,
        "avatar_from": 2,
        "elements": [
            {
                "type": "image",
                "url": "https://ik.imagekit.io/7eefh1kim/transparent_bg.png?updatedAt=1757843265798",
                "width": 780,
                "height": 438,
                "scale_x": 1,
                "scale_y": 1,
                "offset_x": 1920,
                "offset_y": 1080
            },

            {
                "type": "avatar",
                "scale_x": 1,
                "scale_y": 1,
                "width": 1080,
                "height": 1080,
                "offset_x": 1920,
                "offset_y": 1080,
                avatar_id: avatarId,
            },
            {
                "type": "audio",
                "url": voiceUrl
            }
        ],

    },
        {
            headers: {
                Authorization: `Bearer ${process.env.AKOOL_API_KEY}`,
                'Content-Type': 'application/json'
            }
        })
    console.log(result?.data);

    const generatedAvatarId = "68c6ea80f0eec691e9056319" //result?.data?.data?._id;
    if (!generatedAvatarId) {
        throw new Error('Failed to get voice ID');
    }

    const poll = async (retries = 10, interval = 3000) => {
        for (let i = 0; i < retries; i++) {
            const statusRes = await axios.get(
                `https://openapi.akool.com/api/open/v3/content/video/infobymodelid?video_model_id=${generatedAvatarId}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.AKOOL_API_KEY}`
                    }
                }
            );

            const status = statusRes?.data?.data?.video_status;
            console.log('Polling status:', status);

            if (status === 3) {
                return statusRes?.data?.data?.video;
            }
            if (status === 4) {
                throw new Error('Voice generation failed');
            }

            // Wait before next poll
            await new Promise(resolve => setTimeout(resolve, interval));
        }
        throw new Error('Polling timeout');
    };

    // Execute polling and wait for result
    const avatarVideoUrl = await poll();

    // Return the final response
    return NextResponse.json({ avatarVideoUrl });

    //Avatar Url

}