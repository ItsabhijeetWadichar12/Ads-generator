
import React from "react";
import Image from "next/image";


export default function AboutPage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
			<div className="max-w-3xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-300">
				{/* Header Section */}
				<section className="flex flex-col items-center mb-12">
											<div className="bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-3 rounded-full shadow-lg flex items-center justify-center">
												{/* About Us themed SVG icon: group of users */}
												<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="32" cy="32" r="32" fill="url(#paint0_radial)" />
													<ellipse cx="32" cy="28" rx="10" ry="10" fill="#fff" />
													<ellipse cx="22" cy="40" rx="6" ry="6" fill="#fff" />
													<ellipse cx="42" cy="40" rx="6" ry="6" fill="#fff" />
													<ellipse cx="32" cy="44" rx="12" ry="6" fill="#fff" />
													<defs>
														<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(32 32) scale(32)" gradientUnits="userSpaceOnUse">
															<stop stopColor="#7C3AED"/>
															<stop offset="1" stopColor="#3B82F6"/>
														</radialGradient>
													</defs>
												</svg>
											</div>
					<h1 className="text-4xl font-extrabold mt-6 mb-3 text-gray-900 tracking-tight text-center">About Ads Generator</h1>
					<p className="text-lg text-gray-700 text-center max-w-lg">
						Ads Generator is a modern platform to create, manage, and optimize your advertising campaigns. Our AI-powered tools and intuitive dashboard help you reach your audience and grow your business effortlessly.
					</p>
				</section>

				{/* Features Section */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Key Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<FeatureCard icon="💡" title="AI-powered Ad Generation" desc="Create compelling ads in seconds using advanced AI." color="from-blue-500 to-purple-500" />
						<FeatureCard icon="📊" title="Analytics & Performance" desc="Track your campaigns in real-time with detailed analytics." color="from-purple-500 to-pink-500" />
						<FeatureCard icon="🛠️" title="Campaign Dashboard" desc="Manage all your ads and campaigns in one place." color="from-pink-500 to-blue-500" />
						<FeatureCard icon="🔒" title="Secure & Scalable" desc="Your data is protected with enterprise-grade security." color="from-purple-500 to-blue-500" />
					</div>
				</section>

				{/* Mission Section */}
				<section className="mb-8">
					<div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 shadow flex flex-col items-center">
						<h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
						<p className="text-gray-100 text-lg text-center max-w-xl">
							Empowering businesses of all sizes to succeed in digital advertising with smart, easy-to-use tools and actionable insights. Your growth is our mission.
						</p>
					</div>
				</section>

				{/* Footer Section */}
				<footer className="text-center text-gray-500 text-sm mt-10">
					&copy; {new Date().getFullYear()} Ads Generator. All rights reserved.
				</footer>
			</div>
		</main>
	);
}

function FeatureCard({ icon, title, desc, color }) {
	return (
		<div className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow flex flex-col items-center`}>
			<div className="text-4xl mb-3">{icon}</div>
			<h3 className="text-lg font-semibold text-white mb-2 text-center">{title}</h3>
			<p className="text-white text-center text-sm">{desc}</p>
		</div>
	);
}
