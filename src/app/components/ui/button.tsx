"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "bg-primary-500 text-primary-100 shadow hover:bg-primary-600/90 data-[state=open]:bg-accent-500",
        variant === "destructive" && "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        variant === "outline" &&
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        variant === "link" && "text-primary-600 underline-offset-4 hover:underline",
        size === "default" && "h-9 px-4 py-2",
        size === "sm" && "h-8 rounded-md px-3 text-xs",
        size === "lg" && "h-10 rounded-md px-8",
        size === "icon" && "h-9 w-9",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  )
})
Button.displayName = "Button"
