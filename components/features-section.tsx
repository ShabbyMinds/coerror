export function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Context",
      description: "Every alert ships with logs, traces, and environment context — no manual digging.",
    },
    {
      icon: "🔁",
      title: "Smart Escalations",
      description: "Missed acknowledgments re-trigger automatically, ensuring nothing gets lost.",
    },
    {
      icon: "🔒",
      title: "Self-Host Ready",
      description: "Full in-house deployment for enterprises that demand total control.",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-card">Why Us!! </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-background">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
