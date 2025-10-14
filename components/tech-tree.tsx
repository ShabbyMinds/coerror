"use client"

import { useEffect, useRef } from "react"

interface TechNode {
  id: string
  label: string
  icon: string
  angle: number
}

const techNodes: TechNode[] = [
  {
    id: "kafka",
    label: "Kafka",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apache-kafka-icon-md-OwBBLVjixmX89XTZePms4Oz0jO43iS.png",
    angle: 0,
  },
  { id: "clickhouse", label: "ClickHouse", icon: "/images/clickhouse-icon.svg", angle: 40 },
  { id: "fiber", label: "Go Fiber", icon: "/images/fiber-icon.svg", angle: 80 },
  { id: "golang", label: "Golang", icon: "/images/golang-icon.png", angle: 120 },
  { id: "teams", label: "Teams", icon: "/images/teams-icon.svg", angle: 160 },
  {
    id: "gmail",
    label: "Email",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/company-email-svg-png-icon-download-18-Eq3QUl0XndSowh7n4HRb41559TinCp.png",
    angle: 200,
  },
  { id: "jira", label: "Jira", icon: "/images/jira-icon.svg", angle: 240 },
  {
    id: "sms",
    label: "SMS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sms-text-message-icon-0-C3qTRpEo32rnJYJyrEMFFORVJHH2Oa.png",
    angle: 280,
  },
  {
    id: "twilio",
    label: "Twilio",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Twilio_logo_black-uS9BrkfCwabxzeM8vZcYBRr7XyPNNW.png",
    angle: 320,
  },
]

export function TechTree() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const lines = svgRef.current.querySelectorAll(".connection-line")
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("animate-draw")
      }, index * 100)
    })
  }, [])

  const centerX = 400
  const centerY = 300
  const radius = 200

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg ref={svgRef} viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#404040" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {techNodes.map((node) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180)
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180)
          return (
            <line
              key={`line-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              className="connection-line"
              style={{
                strokeDasharray: "1000",
                strokeDashoffset: "1000",
                transition: "stroke-dashoffset 1.5s ease-out",
              }}
              filter="url(#glow)"
            />
          )
        })}

        {/* Center logo circle */}
        <circle cx={centerX} cy={centerY} r="60" fill="#ffffff" stroke="#000000" strokeWidth="3" filter="url(#glow)" />
        <image
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coerror-Qi4tlm9jLqk53OpAPB2EioXSjTg30p.jpg"
          x={centerX - 40}
          y={centerY - 40}
          width="80"
          height="80"
        />

        {/* Tech nodes */}
        {techNodes.map((node, index) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180)
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180)
          return (
            <g key={node.id}>
              <circle cx={x} cy={y} r="35" fill="#ffffff" stroke="#000000" strokeWidth="2" filter="url(#glow)" />
              <image
                href={node.icon}
                x={x - 20}
                y={y - 20}
                width="40"
                height="40"
                opacity="0.8"
                className="hover:opacity-100 transition-opacity"
              />
              <text x={x} y={y + 50} textAnchor="middle" className="text-xs fill-gray-600 font-mono" fontSize="12">
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
