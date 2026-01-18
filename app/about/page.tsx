"use client"

import { Footer } from "@/components/footer"
import { LaunchCountdown } from "@/components/launch-countdown"
import { Badge } from "@/components/ui/badge"
import WorldMap from "@/components/ui/world-map"
import { motion } from "motion/react"

export default function AboutPage() {

    return (
        <main className="min-h-screen bg-white text-black selection:bg-orange-100">
            {/* Navigation / Header */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md">
                <a href="/" className="font-bold text-xl tracking-tight">coerror</a>
                <a href="mailto:hello@coerror.com" className="text-sm font-medium hover:text-orange-600 transition-colors">
                    hello@coerror.com
                </a>
            </header>

            {/* Story Section */}
            <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
                <div className="relative inline-block">
                    <span className="absolute -top-8 -left-8 text-8xl font-serif text-orange-100 select-none">“</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight relative z-10">
                        Launched in December 2025 to change the entire infra of DevOps and contribute in the AI age.
                    </h1>
                </div>
                <p className="mt-8 text-lg text-gray-500 uppercase tracking-widest text-xs font-semibold">
                    Not launched but completely buzzed
                </p>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Distributed Team</h2>
                        <p className="text-gray-500">
                            Operating across <span className="text-black font-semibold">Bangalore</span>, <span className="text-black font-semibold">Gurgaon</span>, and <span className="text-black font-semibold">Seattle</span>.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <WorldMap
                            dots={[
                                {
                                    start: { lat: 12.9716, lng: 77.5946 }, // Bangalore
                                    end: { lat: 28.4595, lng: 77.0266 }, // Gurgaon
                                },
                                {
                                    start: { lat: 28.4595, lng: 77.0266 }, // Gurgaon
                                    end: { lat: 47.6062, lng: -122.3321 }, // Seattle
                                },
                                {
                                    start: { lat: 47.6062, lng: -122.3321 }, // Seattle
                                    end: { lat: 12.9716, lng: 77.5946 }, // Bangalore (Loop back)
                                },
                            ]}
                            lineColor="#f97316" // Orange to match brand
                        />
                    </div>
                </div>
            </section>

            {/* Countdown Section */}
            <section className="py-24 px-6 text-center">
                <LaunchCountdown />
            </section>

            {/* API Docs Note */}
            <section className="py-12 border-t border-gray-100 text-center">
                <p className="text-gray-500 font-mono text-sm">
                    API Documentation <span className="text-orange-600 mx-2">•</span> Coming Soon
                </p>
            </section>

            {/* Disclaimer & Footer */}
            <footer className="bg-black text-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed border border-gray-800 p-4 rounded-lg bg-gray-900/50">
                        ⚠️ <span className="font-semibold text-white">Disclaimer:</span> Don't follow any social media posing as us. We are not yet available and launched.
                    </p>

                    <div className="pt-8 text-xs text-gray-600">
                        © {new Date().getFullYear()} Coerror. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    )
}
