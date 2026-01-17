import { Zap, RefreshCw, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-black" strokeWidth={1.5} />,
      title: "Instant Context",
      description: "Every alert ships with logs, traces, and environment context — no manual digging.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-black" strokeWidth={1.5} />,
      title: "Smart Escalations",
      description: "Missed acknowledgments re-trigger automatically, ensuring nothing gets lost.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" strokeWidth={1.5} />,
      title: "Self-Host Ready",
      description: "Full in-house deployment for enterprises that demand total control.",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#37322F]">Why Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#37322F]">{feature.title}</h3>
                <p className="text-[#605A57] leading-relaxed font-sans">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
