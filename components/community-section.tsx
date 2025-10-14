export function CommunitySection() {
  return (
    <section className="relative py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-balance text-background">
          Built for developers who never wait for the bug report.
        </h2>

        <div className="prose prose-lg mx-auto">
          <p className="text-muted-foreground leading-relaxed text-balance">
            coerror was designed for real engineering teams — the ones who care about uptime, not dashboards. It's for
            the people who fix things at 3 AM before anyone even knows something went wrong. This isn't another
            "monitoring platform." It's your early-warning network.
          </p>
        </div>

        <div className="pt-4">
          <p className="text-xl font-semibold text-popover">Because knowing late costs more.</p>
        </div>
      </div>
    </section>
  )
}
