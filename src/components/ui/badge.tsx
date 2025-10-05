import React from "react";

import { cn } from "@/lib/utils";



export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};


export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
    const variants: Record<string, string> = {
      default: "bg-muted text-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "text-foreground",
    };
    return (
      <span
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export const Badge: React.FC<BadgeProps> = ({ className = "", variant = "default", ...props }) => {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
  const variants: Record<string, string> = {
    default: "bg-muted text-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "text-foreground",
  };
  return <span className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
};

