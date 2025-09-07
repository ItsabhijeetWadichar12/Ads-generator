
import React from "react";

const plans = [
	{
		name: "Starter",
		price: "₹19/mo",
		features: [
			"Basic ad generation",
			"Up to 10 campaigns/month",
			"Email support",
		],
		color: "from-blue-500 to-purple-500",
		icon: "🚀",
	},
	{
		name: "Pro",
		price: "₹49/mo",
		features: [
			"Advanced AI ad generation",
			"Unlimited campaigns",
			"Team collaboration",
			"Priority support",
		],
		color: "from-purple-500 to-pink-500",
		icon: "💎",
		popular: true,
	},
	{
		name: "Enterprise",
		price: "Contact Us",
		features: [
			"Custom solutions",
			"Dedicated account manager",
			"API access",
			"Premium support",
		],
		color: "from-pink-500 to-blue-500",
		icon: "🏢",
	},
];

export default function PricingPage() {
	 return (
	  <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-0">
	   {/* Hero Section */}
	   <div className="relative w-full">
		<div className="max-w-6xl mx-auto pt-16 pb-20 px-6 text-center">
		 <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full px-8 py-3 shadow-xl mb-6 animate-pulse">
		<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-3xl font-extrabold tracking-wide drop-shadow-2xl animate-pulse flex items-center justify-center gap-2">
			<span className="animate-bounce">🚀</span>
			<span className="animate-gradient">Unlock <span className="text-yellow-300">Your</span> <span className="text-pink-300">Ad</span> <span className="text-blue-300">Potential</span></span>
			<span className="animate-bounce">✨</span>
		</span>
		 </div>
		 <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">Pricing Plans</h1>
		 <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-4">
		  Choose the plan that fits your business needs. All plans include secure infrastructure and access to our ad generation platform.
		 </p>
		 <div className="flex justify-center gap-4 mt-6">
		  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-3 rounded-full text-white font-semibold shadow-lg text-base">
		   <span className="text-xl">✨</span> Modern UI
		  </span>
		  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-3 rounded-full text-white font-semibold shadow-lg text-base">
		   <span className="text-xl">🤖</span> AI Powered
		  </span>
		  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-3 rounded-full text-white font-semibold shadow-lg text-base">
		   <span className="text-xl">🔒</span> Secure
		  </span>
		 </div>
		</div>
		{/* Decorative SVG Wave */}
		<div className="absolute left-0 right-0 -bottom-1">
		 <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
		  <path fill="url(#waveGradient)" fillOpacity="0.5" d="M0,32 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"></path>
		  <defs>
		   <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
			<stop stopColor="#6366F1" />
			<stop offset="1" stopColor="#EC4899" />
		   </linearGradient>
		  </defs>
		 </svg>
		</div>
	   </div>
	   <div className="max-w-6xl w-full mx-auto mt-0">
		<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`relative rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 ${plan.popular ? 'border-yellow-400' : 'border-transparent'} bg-white/20 backdrop-blur-xl transition-transform hover:scale-105 hover:shadow-3xl duration-300`}
						>
							{plan.popular && (
								<span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">Most Popular</span>
							)}
							<div className={`bg-gradient-to-br ${plan.color} w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 text-3xl`}>{plan.icon}</div>
							<h2 className="text-2xl font-bold text-white mb-2 drop-shadow text-center">{plan.name}</h2>
							<div className="text-4xl font-extrabold text-white mb-4 drop-shadow">{plan.price}</div>
							<ul className="text-white mb-8 space-y-3 w-full">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center gap-2 text-base">
										<span className="text-green-300">✔</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<button className="mt-auto bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-purple-400 hover:to-blue-400 transition text-lg">
								{plan.price === "Contact Us" ? "Contact Sales" : "Choose Plan"}
							</button>
						</div>
					))}
				</div>
				<section className="mt-16 text-center">
					<h3 className="text-xl font-bold text-white mb-2">All plans include:</h3>
					<div className="flex flex-wrap justify-center gap-6">
						<FeatureBadge icon="🔒" text="Secure Infrastructure" />
						<FeatureBadge icon="⚡" text="Fast Performance" />
						<FeatureBadge icon="🤝" text="Collaboration Tools" />
						<FeatureBadge icon="📈" text="Analytics Dashboard" />
						<FeatureBadge icon="🧑‍💻" text="24/7 Support" />
					</div>
				</section>
			</div>
		</main>
	);
}

function FeatureBadge({ icon, text }) {
	return (
		<span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-3 rounded-full text-white font-semibold shadow-lg text-base">
			<span className="text-xl">{icon}</span>
			{text}
		</span>
	);
}
