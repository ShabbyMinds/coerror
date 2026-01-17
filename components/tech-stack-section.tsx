import { EffortlessIntegration } from "./effortless-integration"

export function TechStackSection() {
  return (
    <section className="relative py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
              Powered by the backbone of modern systems.
            </h3>
            {/* Removed the subtext as the heading is now self-explanatory and matches the user's request context */}
          </div>
          <div className="w-full relative bg-transparent flex justify-center items-center">
            {/* 
                Responsive container:
                - full width
                - height auto (controlled by aspect ratio of child)
                - max-width to prevent it becoming too massive on large screens
             */}
            <div className="w-full max-w-[600px] aspect-square relative">
              <EffortlessIntegration width="100%" height="100%" className="w-full h-full" />
              {/* Gradient mask for soft bottom edge interaction with section */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
