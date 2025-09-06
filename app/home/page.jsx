"use client"
import Header from '@/components/Custom/Header';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'


function Home() {
    const { isSignedIn, user } = useUser();
    const router = useRouter();

    const handleGetStarted = () => {
        if (isSignedIn) {
            router.push('/workspace');
        } else {
            router.push('/sign-in');
        }
    }
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col overflow-hidden relative">
            {/* Modern geometric background */}
            <Header />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Ultra-modern Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 z-10">
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-ping delay-300"></div>
                    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-bounce delay-500"></div>
                    <div className="absolute top-60 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-pulse delay-700"></div>
                </div>

                {/* Modern status badge */}
                <div className="group relative mb-8 animate-fade-in-up">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700/50">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-200 tracking-wide">AI-Powered • Live Now</span>
                        <svg className="w-4 h-4 text-cyan-400 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>

                {/* Main headline with modern typography */}
                <div className="relative mb-8 animate-fade-in-up delay-200">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-cyan-300 to-slate-200 mb-4">
                        Create Ads
                    </h1>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                            That Convert
                        </span>
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-slate-300 mt-8 max-w-3xl leading-relaxed animate-fade-in-up delay-400 font-light">
                    Generate <span className="text-cyan-400 font-semibold">compelling ad copy</span>,
                    stunning <span className="text-purple-400 font-semibold">creative variations</span>,
                    and ready-to-launch <span className="text-blue-400 font-semibold">campaigns</span> in seconds.
                </p>

                {/* Modern CTA buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-600">
                    <button
                        onClick={handleGetStarted}
                        className="group relative overflow-hidden"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-12 py-5 rounded-2xl flex items-center transform transition-all duration-300 hover:scale-105">
                            <span className="text-lg">
                                {isSignedIn ? `Continue, ${user?.firstName || 'User'}` : 'Get Started Free'}
                            </span>
                            <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </button>

                    {/* <button className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-600/50 text-slate-200 font-semibold px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-500 hover:scale-105">
            <span className="flex items-center text-lg">
              <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
              Watch Demo
            </span>
          </button> */}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-col items-center animate-fade-in-up delay-800">
                    {/* <p className="text-slate-400 text-sm mb-4 tracking-wide">TRUSTED BY 10,000+ MARKETERS</p> */}
                    <div className="flex items-center space-x-8 opacity-60">
                        {/* <div className="text-slate-400 font-semibold">Meta</div>
            <div className="text-slate-400 font-semibold">Google</div>
            <div className="text-slate-400 font-semibold">TikTok</div>
            <div className="text-slate-400 font-semibold">LinkedIn</div> */}
                    </div>
                </div>
            </section>
            {/* Ultra-modern Features Section */}
            <section className="relative py-32 px-6 z-10">
                {/* Section header with modern design */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
                            Revolutionary Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Everything You Need to
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            Dominate Digital
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Cutting-edge AI technology meets intuitive design to deliver unprecedented results
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                        {[
                            {
                                title: "Realistic voice-overs",
                                desc: "Convert text into natural speech .",
                                icon: "🔊",
                                backIcon: "⚡",
                                backTitle: "AI-Powered Engine",
                                backDesc: "Convert text into natural speech",
                                gradient: "from-cyan-500 to-blue-600"
                            },
                            {
                                title: "Smart Ads Creation",
                                desc: "Instantly generate ad scripts, voice-overs, and visuals powered by AI.",
                                icon: "💡",
                                backIcon: "�",
                                backTitle: "Performance Optimization",
                                backDesc: "Instantly generate ad scripts, voice-overs, and visuals powered by AI",
                                gradient: "from-purple-500 to-pink-600"
                            },
                            {
                                title: "AI Avatars",
                                desc: "Bring ads to life with avatars that speaks.",
                                icon: "🤖",
                                backIcon: "🤖",
                                backTitle: "Universal Integration",
                                backDesc: "Bring ads to life with avatars that speaks.",
                                gradient: "from-blue-500 to-purple-600"
                            },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="flip-card group animate-fade-in-up relative"
                                style={{
                                    height: "400px",
                                    animationDelay: `${i * 200 + 800}ms`
                                }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-60 blur transition duration-1000 rounded-3xl"
                                    style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                                </div>

                                <div className="flip-card-inner w-full h-full relative">
                                    {/* Ultra-modern Front Side */}
                                    <div className="flip-card-front absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center p-8 transform transition-all duration-500 hover:border-slate-600">
                                        {/* Icon with modern styling */}
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                                            <div className="relative text-7xl mb-2 animate-bounce-subtle">{f.icon}</div>
                                        </div>

                                        <h3 className="font-black text-2xl text-white mb-4 tracking-tight">{f.title}</h3>
                                        <p className="text-slate-300 text-base leading-relaxed mb-6">{f.desc}</p>

                                        {/* Modern hover indicator */}
                                        <div className="absolute bottom-6 right-6 flex items-center text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="mr-2">Explore</span>
                                            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Ultra-modern Back Side */}
                                    <div className={`flip-card-back absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center p-8 shadow-2xl`}>
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                                            <div className="relative text-7xl mb-2 animate-pulse filter drop-shadow-lg">{f.backIcon}</div>
                                        </div>

                                        <h3 className="font-black text-2xl text-white mb-4 tracking-tight">{f.backTitle}</h3>
                                        <p className="text-white/90 text-base leading-relaxed mb-8">{f.backDesc}</p>

                                        <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-1000">
                    {[
                        // { number: "10M+", label: "Ads Generated" },
                        // { number: "500%", label: "Avg CTR Increase" },
                        // { number: "99.9%", label: "Uptime SLA" },
                        // { number: "24/7", label: "Expert Support" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </div>
                            <div className="text-slate-400 text-sm tracking-wide uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-32 px-6 text-center overflow-hidden">
                {/* Modern background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-2xl animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Premium badge */}
                    <div className="inline-block mb-8 animate-fade-in-up">
                        <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm border border-cyan-400/30 px-6 py-2 rounded-full">
                            <span className="text-cyan-300 text-sm font-semibold tracking-wide">🚀 LAUNCH YOUR SUCCESS</span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fade-in-up delay-200">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">10X</span> Your Results?
                    </h2>

                    <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-400">
                        Join <span className="text-cyan-400 font-bold">50,000+</span> smart marketers who've already transformed their advertising game with AI.
                    </p>

                    {/* Premium CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-600">
                        <button
                            onClick={handleGetStarted}
                            className="group relative overflow-hidden"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black px-16 py-6 rounded-3xl flex items-center transform transition-all duration-300 hover:scale-105 text-xl">
                                <span>
                                    {isSignedIn ? '🎯 Go to Dashboard' : '🚀 Start Free Trial'}
                                </span>
                                <svg className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </button>

                        <button className="group bg-slate-800/50 backdrop-blur-xl border-2 border-slate-600/50 text-slate-200 font-bold px-12 py-6 rounded-3xl transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-500 hover:scale-105 text-xl">
                            <span className="flex items-center">
                                <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Watch Success Stories
                            </span>
                        </button>
                    </div>

                    {/* Social proof */}
                    <div className="mt-16 animate-fade-in-up delay-800">
                        <div className="flex justify-center items-center space-x-8 mb-6">
                            <div className="flex -space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-white"></div>
                                ))}
                            </div>
                            <div className="text-left">
                                {/* <div className="text-2xl font-bold text-white">4.9/5</div> */}
                                {/* <div className="text-slate-400 text-sm">from 10,000+ reviews</div> */}
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg italic">
                            "This AI tool increased our conversion rates by 400% in just 30 days!"
                        </p>
                    </div>
                </div>
            </section>

            {/* Ultra-modern Footer */}
            <footer className="relative bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand section */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl mr-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">P</span>
                                </div>
                                <span className="text-2xl font-black text-white">PromoBot</span>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-6">
                                The future of advertising is here. Create, optimize, and scale your campaigns with the power of artificial intelligence.
                            </p>
                            <div className="flex space-x-4">
                                {['twitter', 'linkedin', 'youtube', 'instagram'].map((social) => (
                                    <div key={social} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                                        <div className="w-5 h-5 bg-slate-400"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Product</h3>
                            <ul className="space-y-3">
                                {['Features', 'Pricing', 'API', 'Integrations', 'Templates'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
                            <ul className="space-y-3">
                                {['Help Center', 'Documentation', 'Contact Us', 'Status', 'Community'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} PromoBot. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Home