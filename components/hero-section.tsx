import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"
import { Cover } from "@/components/ui/cover"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Logo - Hero focal point */}
        <div className="flex justify-center">
          <Image
            src="/images/coerror-logo.svg"
            alt="coerror"
            width={1000}
            height={400}
            className="h-20 w-auto object-contain lg:h-40 md:h-96"
            priority
          />
        </div>

        {/* Main headline */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-black leading-tight">
            Solve before it <Cover>escalates</Cover>.
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-600 text-balance leading-tight">
            While others find out, you already know.
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed pt-4">
          The real-time awareness layer that detects, prioritizes, and informs — before anyone reports an issue.
        </p>

        <div className="pt-8">
          <WaitlistForm
            buttonText="Join the Waitlist →"
            subtext="Private Alpha for teams that move fast."
            size="lg"
            className="text-lg"
          />
        </div>
      </div>

    </section>
  )
}
