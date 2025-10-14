export function ProblemSection() {
  const problems = [
    {
      title: "Alert Fatigue.",
      description: "Monitoring tools bury your signal in thousands of irrelevant pings. Your team tunes out.",
    },
    {
      title: "Manual Context.",
      description: "The engineer on-call has to chase logs, traces, and metrics manually. Resolution time doubles.",
    },
    {
      title: "Blind Escalation.",
      description: "Escalation is a blunt instrument that rings phones randomly. The failure loop repeats.",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">The Problem Isn't Monitoring. It's Time.</h2>
          <p className="text-xl text-gray-700 text-balance">
            The costs of being reactive are no longer just financial. They are reputational.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {problems.map((problem, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-semibold text-black">{problem.title}</h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <p className="text-lg text-gray-800 text-balance max-w-3xl mx-auto">
            coerror breaks this cycle. We do not aggregate logs; we deliver actionable intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
