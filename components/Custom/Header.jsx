import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
    return (
        <header className="relative z-20 w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight">PromoBot </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">Home</a>
                    <a href="/features" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">Features</a>
                    <a href="/pricing" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">Pricing</a>
                    <a href="/workspace" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">Dashboard</a>
                    <a href="/about" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">About us </a>
                    <a href="/contact" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors duration-300">Contact Us </a>
                </div>

                {/* Clerk User Button */}
                <div className="flex items-center gap-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className="md:hidden px-6 py-2 flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border-t border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <span className="text-lg font-black text-white tracking-tight">AI Ads</span>
                </div>
                <UserButton afterSignOutUrl="/" />
            </nav>
        </header>
    )
}

export default Header