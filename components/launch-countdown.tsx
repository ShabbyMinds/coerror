"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function LaunchCountdown() {
    const launchDate = new Date("2026-03-06T00:00:00")
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const difference = launchDate.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Launch Countdown</h3>
            <div className="grid grid-cols-4 gap-4 md:gap-8 font-mono">
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-400 mt-2">DAYS</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-400 mt-2">HOURS</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-400 mt-2">MINUTES</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold text-orange-600">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-400 mt-2">SECONDS</span>
                </div>
            </div>
            <div className="mt-12">
                <Badge variant="outline" className="px-4 py-2 text-sm text-gray-500 border-dashed border-gray-300">
                    Launch Date: March 6th
                </Badge>
            </div>
        </div>
    )
}
