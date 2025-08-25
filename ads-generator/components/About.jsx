import React from 'react';

function AboutPage() {
  return   (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6 py-16">
      <section className="max-w-3xl w-full bg-slate-800/80 rounded-2xl shadow-xl p-10 text-center backdrop-blur-lg border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About PromoBot
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          PromoBot is an advanced AI-powered platform designed to help businesses and creators generate high-converting ads in seconds. Our mission is to empower marketers with cutting-edge technology, making advertising smarter, faster, and more effective.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Why PromoBot?</h2>
          <ul className="text-slate-200 text-left list-disc list-inside mx-auto max-w-xl">
            <li>Instantly generate compelling ad copy and creative variations using AI.</li>
            <li>Export campaigns directly to Google, Meta, TikTok, LinkedIn, and more.</li>
            <li>Save time, boost engagement, and grow your brand with data-driven insights.</li>
            <li>Trusted by thousands of marketers and businesses worldwide.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Our Vision</h2>
          <p className="text-slate-300">
            We believe the future of advertising is intelligent, automated, and accessible to everyone. PromoBot combines the latest AI advancements with an intuitive interface to help you create, optimize, and scale your campaigns effortlessly.
          </p>
        </div>
        <div className="mt-10">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-bold px-6 py-2 rounded-full shadow-lg">
            Join us and revolutionize your advertising!
          </span>
        </div>
      </section>
    </main>
  );
}
export default AboutPage;
