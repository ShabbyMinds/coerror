import { TechTree } from "./tech-tree"

export function TechStackSection() {
  return (
    <section className="relative py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-background">
            Powered by the backbone of modern systems.
          </p>
        </div>

        {/* Tech Tree Visualization */}
        <TechTree />

        {/* Tagline */}
        <div className="text-center space-y-4 mt-6">
          <p className="text-lg md:text-xl text-popover font-bold">Built on Kafka. Fueled by ClickHouse.</p>
          <p className="text-lg md:text-xl font-semibold text-muted-foreground">Written in Go. Encrypted with SHA-3.</p>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span>Self-host option</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <span>Enterprise-grade speed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span>Zero configuration drift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
