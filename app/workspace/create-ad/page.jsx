"use client"

import Header from "@/components/Custom/Header";
import { Sparkles } from "lucide-react";
import { useState } from "react";

function CreateAdd() {
    const [userInput, setUserInput] = useState();
    return (
        <div className="min-h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8">
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-slate-800/70 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-xl w-full text-center backdrop-blur-xl border border-slate-700">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">Create Ad</h1>
                    <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8">Start building your next AI-powered ad campaign with stunning visuals and compelling copy.</p>
                    <input
                        placeholder="Enter your topic or product information"
                        className="w-full max-w-md text-base sm:text-lg mt-5 px-5 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white border-2 border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg placeholder:text-slate-400 placeholder:font-medium"

                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <button
                            className="mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
                        >
                            <Sparkles />
                            Generate
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CreateAdd;