import React from "react";
import { cn } from "@/lib/utils";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none";
    const variants: Record<string, string> = {
      default: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border bg-transparent hover:bg-accent",
    };
    return (
      <button
        ref={ref}

        className={cn(base, variants[variant], className)}

        className={`${base} ${variants[variant]} ${className}`.trim()}

        {...props}
      />
    );
  }
);
Button.displayName = "Button";
