import { ArrowLeft } from "lucide-react"

const steps = ["انتخاب", "ترجمهٔ خودکار", "بازبینی انسانی", "انتشار روزانه"]

function ArrowNode() {
  return (
    <span aria-hidden className="text-muted-foreground/50">
      <ArrowLeft className="size-3" />
    </span>
  )
}

export default function PipelineStrip({ sourceCount }: { sourceCount: string }) {
  return (
    <div className="-mx-4 border-y border-border bg-muted/40 px-4 py-4 sm:-mx-6 sm:px-6">
      <p className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs text-foreground/80 sm:text-sm">
        <span className="flex items-center gap-1">
          از{" "}
          <span className="font-mono text-[0.95em] tracking-tight" lang="en">
            {sourceCount}
          </span>{" "}
          منبع معتبر
        </span>
        {steps.map((step, index) => (
          <span key={step} className="flex items-center gap-x-2.5">
            <ArrowNode />
            <span className={index === steps.length - 1 ? "font-bold text-primary" : "font-semibold"}>
              {step}
            </span>
          </span>
        ))}
      </p>
    </div>
  )
}