"use client"

import { Footer } from "@/components/footer"
import { LaunchCountdown } from "@/components/launch-countdown"
import { Badge } from "@/components/ui/badge"
import WorldMap from "@/components/ui/world-map"
import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {

    return (
        <main className="min-h-screen bg-white text-black selection:bg-orange-100 relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Story Section */}
            {/* Story Section */}
            <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
                <div className="relative inline-block mb-12">
                    <span className="absolute -top-8 -left-8 text-8xl font-serif text-black/25 select-none">“</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight relative z-10">
                        Started in December 2025 to change the entire infra of DevOps and contribute in the AI age.
                    </h1>
                </div>

                {/* Decorated Article Section */}
                <div className="max-w-2xl mx-auto text-left space-y-6 relative">
                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-200 to-transparent -ml-8 hidden md:block"></div>

                    <p className="text-lg text-gray-600 leading-relaxed font-serif">
                        <span className="text-4xl float-left mr-3 mt-[-6px] font-bold text-black">I</span>t began with a simple observation: DevOps is broken. Alerts are reactive, fatigue is real, and the tools we rely on are stuck in the past. We started Coerror not just to build another monitoring tool, but to fundamentally rethink how systems communicate distress.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-serif">
                        In an era defined by AI, manual log correlation feels archaic. Our mission is to bring <span className="italic text-black font-medium">pre-emptive intelligence</span> to infrastructure. To fix errors before they cascade. To give engineers their weekends back.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">The Beginning</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                </div>

                <p className="mt-12 text-sm text-gray-400 uppercase tracking-widest font-semibold">
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
                                    start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
                                    end: { lat: 28.4595, lng: 77.0266, label: "Gurgaon" },
                                },
                                {
                                    start: { lat: 28.4595, lng: 77.0266 },
                                    end: { lat: 47.6062, lng: -122.3321, label: "Seattle" },
                                },
                                {
                                    start: { lat: 47.6062, lng: -122.3321 },
                                    end: { lat: 12.9716, lng: 77.5946 }, // Loop back
                                },
                            ]}
                            lineColor="#a3a3a3" // Metallic grey
                        />
                    </div>
                </div>
            </section>

            {/* Countdown Section */}
            <section className="py-24 px-6 text-center">
                <LaunchCountdown />
            </section>

            {/* Contact & Disclaimer Section */}
            <section className="py-20 px-6 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    {/* Contact */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Get in Touch</h2>
                        <p className="text-gray-500">
                            Have questions or want to learn more? Reach out to us.
                        </p>
                        <a href="mailto:hello@coerror.com" className="inline-block text-xl font-medium text-neutral-900 hover:text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-all">
                            hello@coerror.com
                        </a>
                    </div>

                    {/* API Note */}
                    <div className="py-8">
                        <p className="text-gray-400 font-mono text-xs">
                            API Documentation <span className="text-orange-400 mx-2">•</span> Coming Soon
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="p-8 rounded-2xl bg-black border border-gray-800 max-w-2xl mx-auto text-sm leading-relaxed shadow-xl">
                        <span className="font-bold text-white block mb-3 tracking-wide uppercase text-xs">Important Disclaimer</span>
                        <p className="text-gray-300">
                            <span className="text-white font-medium border-b border-gray-600 pb-0.5">Don't follow any social media posing as us.</span> We are not yet available on any social media platform or launched.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
