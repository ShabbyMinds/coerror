import { WaitlistForm } from "@/components/waitlist-form"

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 text-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">Be the first to experience code awareness.</h2>

        <p className="text-xl text-muted-foreground text-balance">
          Join the early access list for the next evolution in observability. Invites rolling out to the initial users.
        </p>

        <div className="pt-4">
          <WaitlistForm buttonText="Join Waitlist →" size="lg" className="text-lg px-12" />
        </div>
      </div>
    </section>
  )
}
