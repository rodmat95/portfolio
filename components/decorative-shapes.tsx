"use client"

import type React from "react"

interface ShapeProps {
  className?: string
  style?: React.CSSProperties
}

export function DecorativeCircle({ className, style }: ShapeProps) {
  return (
    <div className={`rounded-full absolute opacity-30 dark:opacity-40 animate-float ${className}`} style={style}></div>
  )
}

export function DecorativeSquare({ className, style }: ShapeProps) {
  return (
    <div
      className={`absolute opacity-30 dark:opacity-40 animate-float ${className}`}
      style={{
        ...style,
        animationDelay: `${Math.random() * 2}s`,
      }}
    ></div>
  )
}

export function DecorativeTriangle({ className, style }: ShapeProps) {
  return (
    <div
      className={`absolute w-0 h-0 opacity-30 dark:opacity-40 animate-float ${className}`}
      style={{
        ...style,
        animationDelay: `${Math.random() * 2}s`,
      }}
    ></div>
  )
}

export function GradientBlob({ className, style }: ShapeProps) {
  return <div className={`absolute rounded-full blur-3xl opacity-10 dark:opacity-20 ${className}`} style={style}></div>
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <GradientBlob
        className="w-[300px] h-[300px] top-[10%] left-[5%]"
        style={{ backgroundColor: "rgba(71, 85, 105, 0.08)", background: "rgba(32, 87, 133, 0.12)" }}
      />
      <GradientBlob
        className="w-[400px] h-[400px] top-[40%] right-[5%]"
        style={{
          backgroundColor: "rgba(12, 74, 110, 0.08)",
          background: "rgba(59, 132, 197, 0.12)",
          animationDelay: "2s",
        }}
      />
      <GradientBlob
        className="w-[250px] h-[250px] bottom-[10%] left-[20%]"
        style={{
          backgroundColor: "rgba(148, 163, 184, 0.08)",
          background: "rgba(51, 65, 85, 0.12)",
          animationDelay: "4s",
        }}
      />
      <DecorativeCircle
        className="w-8 h-8 top-[15%] right-[15%] border border-slate-300 dark:border-dark-slate-500"
        style={{ animationDelay: "1s" }}
      />
      <DecorativeCircle
        className="w-12 h-12 bottom-[20%] right-[30%] border border-accent-300 dark:border-dark-accent-500"
        style={{ animationDelay: "3s" }}
      />
      <DecorativeSquare
        className="w-10 h-10 top-[30%] left-[10%] rotate-45 border border-slate-300 dark:border-dark-slate-500"
        style={{ animationDelay: "2s" }}
      />
      <DecorativeSquare
        className="w-6 h-6 bottom-[15%] right-[10%] rotate-12 border border-slate-200 dark:border-dark-slate-600"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-20 opacity-5 dark:opacity-15">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-accent-300 to-slate-300 dark:from-dark-slate-500 dark:via-dark-accent-500 dark:to-dark-slate-600 animate-gradient-shift bg-[length:400%_400%]" />
    </div>
  )
}
