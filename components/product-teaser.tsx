import { WaitlistForm } from "@/components/waitlist-form"

export function ProductTeaser() {
  return (
    <section className="relative py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance text-black">
          Pre-emptive awareness for modern codebases.
        </h2>

        <div className="prose prose-lg mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed text-balance">
            Integrate once — via Node, Java, Python, or Rust — and coerror continuously monitors your runtime. When a
            failure, latency spike, or anomaly hits production, coerror instantly alerts the right team through your
            integrated channels — Slack, Teams, Email, Jira, SMS, or Twilio. If it's not acknowledged in time,
            escalation triggers automatically — tiered, smart, and relentless.
          </p>
        </div>

        <div className="pt-4">
          <WaitlistForm buttonText="Join Waitlist →" subtext="No spam. No dashboards. Just signal." />
        </div>
      </div>
    </section>
  )
}
