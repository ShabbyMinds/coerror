"use client"

import React, { useMemo } from "react"

interface EffortlessIntegrationProps {
  width?: number | string
  height?: number | string
  className?: string
}

export function EffortlessIntegration({ width = "100%", height = "100%", className = "" }: EffortlessIntegrationProps) {
  // Internal coordinate system (Square to fit circular orbits comfortably)
  // Max Radius = 200. + NodeSize/2 (21) + Shadow/Padding (~30) = ~251. 
  // 251 * 2 = 502. 
  // Let's use 600x600 to be safe and spacious.
  const baseSize = 600

  const centerX = baseSize / 2
  const centerY = baseSize / 2

  const getPositionOnRing = (radius: number, angle: number) => {
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  const nodeSize = 42
  const iconSize = 22

  const r1 = 90
  const r2 = 145
  const r3 = 200

  const bgColor = "#F3F4F6"

  const nodes = [
    // Inner Ring
    { id: 'notion', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg", r: r1, angle: -Math.PI / 4, bg: '#ffffff', size: nodeSize, iconSize: iconSize },
    { id: 'kafka', icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apache-kafka-icon-md-OwBBLVjixmX89XTZePms4Oz0jO43iS.png", r: r1, angle: (3 * Math.PI) / 4, bg: '#ffffff', size: nodeSize, iconSize: iconSize },
    { id: 'teams', icon: "/images/teams-icon.svg", r: r1, angle: 4.8, bg: '#ffffff', size: nodeSize, iconSize: iconSize },

    // Middle Ring
    { id: 'slack', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg", r: r2, angle: 0, bg: '#ffffff', size: nodeSize, iconSize: iconSize },
    { id: 'github', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", invert: true, r: r2, angle: Math.PI, bg: '#000000', size: nodeSize, iconSize: iconSize },
    { id: 'clickhouse', icon: "/images/clickhouse-icon.svg", r: r2, angle: -Math.PI / 2, bg: '#ffffff', size: nodeSize, iconSize: iconSize },
    { id: 'jira', icon: "/images/jira-icon.svg", r: r2, angle: Math.PI / 2, bg: '#ffffff', size: nodeSize, iconSize: iconSize },

    // Outer Ring
    { id: 'discord', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg", invert: true, r: r3, angle: Math.PI / 4, bg: '#5865F2', size: nodeSize, iconSize: iconSize },
    { id: 'linear', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linear.svg", invert: true, r: r3, angle: (3 * Math.PI) / 4, bg: '#5E6AD2', size: nodeSize, iconSize: iconSize },
    { id: 'framer', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg", invert: true, r: r3, angle: (5 * Math.PI) / 4, bg: '#000000', size: nodeSize, iconSize: iconSize },
    { id: 'stripe', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg", invert: true, r: r3, angle: (7 * Math.PI) / 4, bg: '#635BFF', size: nodeSize, iconSize: iconSize },
  ]

  const ring1Nodes = nodes.filter(n => n.r === r1)
  const ring2Nodes = nodes.filter(n => n.r === r2)
  const ring3Nodes = nodes.filter(n => n.r === r3)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes spin-reverse {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
            }
        `}} />

      {/* 
            Container for Smart Scaling. 
            We use a ViewBox-like approach: 
            The content is 600x600.
            We scale it to fit the container's smallest dimension (contain).
            We center it.
        */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* This inner wrapper preserves the Aspect Ratio (1:1) and fits within the parent */}
        <div style={{
          width: 'min(100%, 100cqh)', // Relies on container query units or just 100% of smallest side if aspect-ratio
          // Simple responsive square trick:
          aspectRatio: '1 / 1',
          height: 'auto',
          maxHeight: '100%',
          maxWidth: '100%',
          position: 'relative'
        }}>
          {/* Now map the 600x600 internal coords to this 100%x100% box */}
          {/* We can use a scale transform if we want pixel perfection, BUT
                    SVG scales naturally. HTML does not.
                    Let's use a fixed 600x600 div and scale it using CSS container queries or just 'scale' transform based on parent size?
                    Trying to measure parent size in React requires ResizeObserver, overkill.
                    
                    Simpler approach: 
                    Define coordinate system in Percentages? 
                    Radius 200/600 = 33%.
                    Center = 50%.
                */}

          {/* Let's try Percentage-based positioning for true responsiveness without manual JS scaling */}

          {/* Central hub (Static) */}
          <div
            style={{
              width: "13.33%", // 80/600
              height: "13.33%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              background: "#37322f",
              boxShadow: "0px 0.6% 2% rgba(0, 0, 0, 0.15)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20
            }}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              color: "#ffffff",
              fontSize: "clamp(12px, 3.5cqw, 24px)" // Responsive font
            }}>
              coerror
            </span>
          </div>

          {/* Nodes Layer - Grouped by Ring */}
          {[
            { nodes: ring1Nodes, speed: 30 },
            { nodes: ring2Nodes, speed: 45 },
            { nodes: ring3Nodes, speed: 60 }
          ].map((ring, idx) => (
            <div key={idx} style={{
              position: 'absolute', inset: 0,
              animation: `spin ${ring.speed}s linear infinite`,
              pointerEvents: 'none', zIndex: 10
            }}>
              {ring.nodes.map((node) => {
                // r is radius in px (relative to 600).
                // rPercent = (r / 600) * 100
                const distPercent = (node.r / baseSize) * 100; // e.g. 200/600 = 33.3%
                return (
                  <div
                    key={node.id}
                    style={{
                      width: "7%", // 42/600
                      height: "7%",
                      position: "absolute",
                      // 1. Positioning Wrapper: Handles placement and centering relative to orbit
                      left: `${(getPositionOnRing(node.r, node.angle).x / baseSize) * 100}%`,
                      top: `${(getPositionOnRing(node.r, node.angle).y / baseSize) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* 2. Visual Wrapper: Handles counter-rotation and styling */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: node.bg,
                      boxShadow: `0 0 15px 15px ${bgColor}, 0px 4px 12px rgba(0, 0, 0, 0.15)`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // Use the SAME 'spin' keyframe but play in reverse direction (360 -> 0)
                      // This ensures perfect synchronization with the parent container's 'spin' (0 -> 360)
                      animation: `spin ${ring.speed}s linear infinite reverse`
                    }}>
                      <div style={{ width: '50%', height: '50%', position: 'relative' }}>
                        <img
                          src={node.icon}
                          alt={node.id}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: node.invert ? "brightness(0) invert(1)" : "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}

          {/* SVG Layer (Background) - Using viewBox for perfect scaling */}
          <svg
            viewBox={`0 0 ${baseSize} ${baseSize}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.05)" />
                <stop offset="50%" stopColor="rgba(0, 0, 0, 0.2)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.05)" />
              </linearGradient>
            </defs>

            {/* Rings */}
            <circle cx={centerX} cy={centerY} r={r1} fill="none" stroke="url(#ringGradient)" strokeWidth="1.5" />
            <circle cx={centerX} cy={centerY} r={r2} fill="none" stroke="url(#ringGradient)" strokeWidth="1.5" />
            <circle cx={centerX} cy={centerY} r={r3} fill="none" stroke="url(#ringGradient)" strokeWidth="1.5" />
          </svg>

        </div>
      </div>
    </div>
  )
}
