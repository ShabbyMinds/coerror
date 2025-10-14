export function MetricsSection() {
  const metrics = [
    {
      value: "↓ 85%",
      label: "MTTA",
      sublabel: "Mean Time to Acknowledge",
      description: "Instant context and smart routing ensure the right team is notified immediately.",
    },
    {
      value: "↓ 40%",
      label: "MTTR",
      sublabel: "Mean Time to Resolve",
      description:
        "Full execution trace and logs are embedded in the first alert. No logging platform search required.",
    },
    {
      value: "100%",
      label: "Accountability",
      sublabel: "Full Audit Trail",
      description:
        "Every alert, acknowledgment, and escalation attempt is logged in ClickHouse for audit and post-mortem analysis.",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-background">Measure Action, Not Just Uptime.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            coerror is engineered to drive down the key indicators of engineering performance by focusing on immediate,
            correct action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 border-2 border-gray-200 rounded-3xl hover:border-black transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-black">{metric.value}</div>
                <div className="text-xl font-semibold text-muted-foreground">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-4">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
