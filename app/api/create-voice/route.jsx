import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { script, voiceId } = await request.json();

        // Initial voice creation request
        const result = await axios.post(
            'https://openapi.akool.com/api/open/v3/audio/create',
            {
                input_text: script,
                voice_id: voiceId,
                rate: "100%",
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AKOOL_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const generatedVoiceId = result?.data?.data?._id;
        if (!generatedVoiceId) {
            throw new Error('Failed to get voice ID');
        }

        // Polling function
        const poll = async (retries = 10, interval = 3000) => {
            for (let i = 0; i < retries; i++) {
                const statusRes = await axios.get(
                    `https://openapi.akool.com/api/open/v3/audio/infobymodelid?audio_model_id=${generatedVoiceId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.AKOOL_API_KEY}`
                        }
                    }
                );

                const status = statusRes?.data?.data?.status;
                console.log('Polling status:', status);

                if (status === 3) {
                    return statusRes?.data?.data?.url;
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
        const audioUrl = await poll();

        // Return the final response
        return NextResponse.json({ audioUrl });

    } catch (error) {
        console.error('Voice generation error:', error);
        return NextResponse.json(
            { error: error.message || 'Voice generation failed' },
            { status: 500 }
        );
    }
}