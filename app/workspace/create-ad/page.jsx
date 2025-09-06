
"use client"

import Header from "@/components/Custom/Header";
import { Sparkles } from "lucide-react";
import { useState } from "react";


function CreateAdd() {
    const [userInput, setUserInput] = useState();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                <div className="bg-slate-800/70 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center backdrop-blur-xl border border-slate-700">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Create Ad</h1>
                    <p className="text-lg text-slate-300 mb-8">Start building your next AI-powered ad campaign with stunning visuals and compelling copy.</p>
                    <div className="flex flex-col items-center mb-6">
                        <img src="/ad-logo.svg" alt="Ad Logo" className="w-20 h-20 mb-4 drop-shadow-lg" />
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Create Ad</h1>
                    </div>
                    <input
                        placeholder="Enter your topic or product information"
                        className="w-full max-w-md text-lg mt-5 px-5 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white border-2 border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg placeholder:text-slate-400 placeholder:font-medium"

                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <button
                            className="mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
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

export default CreateAdd