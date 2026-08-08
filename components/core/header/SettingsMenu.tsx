"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { CheckCheck, Moon, Sun, User2 } from "lucide-react"
import { cn } from "@/lib/utils"

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false
  const stored = localStorage.getItem("theme")
  if (stored) return stored === "dark"
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
}

export default function SettingsMenu({
  trigger,
  placement = "bottom",
}: {
  trigger?: ReactNode
  placement?: "top" | "bottom"
}) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDark(getInitialTheme())
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative w-full">
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            setOpen((o) => !o)
          }
        }}
        className="rounded-xl outline-hidden focus-visible:ring-3 focus-visible:ring-ring"
      >
        {trigger}
      </div>

      {open && (
        <div
          role="menu"
          onClick={(event) => event.stopPropagation()}
          className={cn(
            "absolute start-0 z-50 w-72 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg",
            placement === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
          )}
        >
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
              <User2 className="size-4" />
            </span>
            <div className="flex min-w-0 flex-col items-start">
              <span className="text-sm font-bold">مهمان</span>
              <span className="truncate text-xs text-muted-foreground">
                وارد نشده
              </span>
            </div>
          </div>

          <div className="mx-2 my-2 h-px bg-border" />

          <p className="px-2 pb-1 pt-2 text-[11px] font-bold text-muted-foreground">
            ظاهر
          </p>
          <div className="flex items-center justify-between gap-3 rounded-lg px-2 py-2">
            <div className="flex items-center gap-2.5">
              {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
              <span className="text-sm">حالت تاریک</span>
            </div>
            <button
              role="switch"
              aria-checked={dark}
              onClick={() => setDark((d) => !d)}
              className={cn(
                "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
                dark ? "justify-end bg-primary" : "justify-start bg-input"
              )}
            >
              <span className="size-4 rounded-full bg-background shadow-sm" />
            </button>
          </div>

          <div className="mx-2 my-2 h-px bg-border" />

          <p className="px-2 pb-1 pt-2 text-[11px] font-bold text-muted-foreground">
            حساب و طرح
          </p>
          <div className="space-y-2 px-2 pb-1">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCheck className="size-4 text-primary" />
                <span className="text-sm font-bold">حرفه‌ای</span>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/5 px-2 py-0.5 text-[11px] leading-none font-bold text-primary">
                فعال
              </span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "52%" }}
              />
            </div>
            <p className="text-[11px] text-muted-foreground">
              از سهمیهٔ ماهانهٔ این ماه، ۵۲٪ استفاده شده است.
            </p>
          </div>

          <div className="mx-2 my-2 h-px bg-border" />

          <p className="px-2 pb-1 pt-2 font-mono text-[11px] tabular-nums text-muted-foreground">
            نسخهٔ ۰.۱.۰
          </p>
        </div>
      )}
    </div>
  )
}