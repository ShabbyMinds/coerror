import { EffortlessIntegration } from "./effortless-integration"

export function TechStackSection() {
  return (
    <section className="relative py-24 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#37322F] tracking-tight">
            Powered by the backbone of modern systems.
          </h2>
          <p className="text-lg text-gray-600 font-medium pt-8">
            Built on Rust <span className="mx-2 text-gray-300">•</span> Backed by Kafka & ClickHouse <span className="mx-2 text-gray-300">•</span> Secured by SOC 2 Type II
          </p>
        </div>

        <div className="w-full relative bg-transparent flex justify-center items-center">
          {/* 
                Responsive container:
                - full width
                - height auto (controlled by aspect ratio of child)
                - max-width to prevent it becoming too massive on large screens
             */}
          <div className="w-full max-w-[800px] aspect-square relative">
            <EffortlessIntegration width="100%" height="100%" className="w-full h-full" />
            {/* Gradient mask for soft bottom edge interaction with section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
