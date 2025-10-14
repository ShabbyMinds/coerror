import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProblemSection } from "@/components/problem-section"
import { ProductTeaser } from "@/components/product-teaser"
import { MetricsSection } from "@/components/metrics-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunitySection } from "@/components/community-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TechStackSection />
      <ProblemSection />
      <ProductTeaser />
      <MetricsSection />
      <FeaturesSection />
      <CommunitySection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
