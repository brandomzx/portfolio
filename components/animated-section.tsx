"use client"

import type React from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  animation?: "fade-up" | "fade-in" | "fade-right" | "fade-left" | "zoom-in"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  id,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "-50px",
  ...props
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"
    const delayClass = delay ? `delay-[${delay}ms]` : ""

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-10 ${delayClass}`
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-10 ${delayClass}`
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-10 ${delayClass}`
        case "zoom-in":
          return `${baseClasses} opacity-0 scale-95 ${delayClass}`
        case "fade-in":
        default:
          return `${baseClasses} opacity-0 ${delayClass}`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 ${delayClass}`
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(getAnimationClasses(), className)}
      {...props}
    >
      {children}
    </section>
  )
}

