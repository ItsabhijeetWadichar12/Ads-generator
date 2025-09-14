import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { avatarId,voiceUrl} = await req.json();
    
    //get Avatar Generated ID
    
    const result = await axios.post('https://openapi.akool.com/api/open/v3/talkingavatar/create',{
        
        "width": 3840,
        "height": 2160,
        "avatar_from": 2,
        "elements": [
        {
            "type": "image",
            "url": "https://ik.imagekit.io/7eefh1kim/transparent_bg.png?updatedAt=1757842268814",
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
        console.log(result.data);
        
        return NextResponse.json(result?.data);
    //Avatar Url

}
