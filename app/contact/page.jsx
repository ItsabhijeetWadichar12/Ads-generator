"use client";
import React from "react";


import { useState } from "react";

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
			<div className="max-w-xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-300">
				<h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Contact Us</h1>
				<p className="text-gray-700 text-center mb-8 text-lg">
					We'd love to hear from you! Fill out the form below and our team will get back to you soon.
				</p>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
						<input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" disabled={submitted} />
					</div>
					<div>
						<label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
						<input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" disabled={submitted} />
					</div>
					<div>
						<label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
						<textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" disabled={submitted} />
					</div>
					<button
						type="submit"
						className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg flex items-center justify-center gap-2 ${submitted ? 'bg-green-500 cursor-default' : 'hover:from-purple-500 hover:to-blue-500'}`}
						disabled={submitted}
					>
						{submitted ? (
							<>
								<span className="text-2xl">✔️</span> Message Sent
							</>
						) : (
							<>Send Message</>
						)}
					</button>
				</form>
				{submitted && (
					<div className="mt-6 text-center text-green-600 text-lg font-semibold flex items-center justify-center gap-2">
						<span className="text-2xl">✔️</span> Thank you! Your message has been submitted.
					</div>
				)}
				<div className="mt-10 text-center text-gray-600">
					<div className="mb-2">
						<span className="font-semibold">Email:</span> support@adsgenerator.com
					</div>
					<div>
						<span className="font-semibold">Phone:</span> +91 98765 43210
					</div>
				</div>
			</div>
		</main>
	);
}
