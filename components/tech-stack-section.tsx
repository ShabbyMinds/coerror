import { EffortlessIntegration } from "./effortless-integration"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Database, Zap } from "lucide-react"

export function TechStackSection() {
  return (
    <section className="relative py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#37322F] tracking-tight">
            Powered by the backbone of modern systems.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-base font-medium bg-white border-gray-200 gap-2 hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <Zap className="w-4 h-4 text-orange-600 fill-orange-100" />
              Built on Rust
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base font-medium bg-white border-gray-200 gap-2 hover:bg-blue-50 hover:border-blue-200 transition-colors">
              <Database className="w-4 h-4 text-blue-600" />
              Backed by Kafka
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base font-medium bg-white border-gray-200 gap-2 hover:bg-green-50 hover:border-green-200 transition-colors">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              SOC 2 Type II Compliant
            </Badge>
          </div>
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
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
