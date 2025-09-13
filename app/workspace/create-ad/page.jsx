"use client"

import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import axios from "axios";
import { useMutation } from "convex/react";
import { LoaderCircle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";


function CreateAdd() {
    const [userInput, setUserInput] = useState();
    const [loading, setLoading] = useState(false);
    const { userDetails } = useContext(UserDetailContext);
    const router = useRouter();
    const CreateNewVideoData = useMutation(api.videoData.CreateNewVideoData)
    const GenerateAiVideoScript = async () => {
        if (!userInput) {
            console.error('Please enter a topic');
            return;
        }

        setLoading(true);
        try {
            const result = await axios.post('/api/generate-script', {
                topic: userInput
            });

            // Clean and parse the JSON response
            let jsonData;
            try {
                const rawContent = result?.data;
                // Remove markdown formatting and clean the string
                const cleanContent = typeof rawContent === 'string'
                    ? rawContent
                        .replace(/```json\s*/g, '')
                        .replace(/```\s*/g, '')
                        .replace(/,(\s*})/g, '$1') // Remove trailing commas before closing braces
                        .replace(/,(\s*])/g, '$1') // Remove trailing commas before closing brackets
                        .trim()
                    : JSON.stringify(rawContent);

                jsonData = JSON?.parse(cleanContent);

                // Validate the structure
                if (!Array.isArray(jsonData)) {
                    jsonData = [jsonData];
                }

                // Create video data
                const resp = await CreateNewVideoData({
                    uid: userDetails?._id,
                    topic: userInput,
                    scriptVariant: jsonData
                });

                console.log('Video data created:', resp);
                router.push('/workspace/create-ad/' + resp);

            } catch (parseError) {
                console.error('JSON Parse Error:', parseError);
                throw new Error('Failed to parse AI response');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8">
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-slate-800/70 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-xl w-full text-center backdrop-blur-xl border border-slate-700">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">Create Ad</h1>
                    <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8">Start building your next AI-powered ad campaign with stunning visuals and compelling copy.</p>
                    <input
                        suppressHydrationWarning={true}
                        placeholder="Enter your topic or product information"
                        className="w-full max-w-md text-base sm:text-lg mt-5 px-5 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white border-2 border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg placeholder:text-slate-400 placeholder:font-medium"

                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <button
                            suppressHydrationWarning={true}
                            className="mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
                            onClick={GenerateAiVideoScript}
                            disabled={loading}
                        > {loading ? <LoaderCircle className='animate-spin' /> : <Sparkles />} Generate</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CreateAdd;