import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider",
                    {
                        "bg-wedding-sage text-white hover:bg-opacity-90 hover:scale-105 shadow-md": variant === "primary",
                        "bg-wedding-gold text-white hover:bg-opacity-90 hover:scale-105 shadow-md": variant === "secondary",
                        "border-2 border-wedding-sage text-wedding-sage hover:bg-wedding-sage hover:text-white": variant === "outline",
                        "px-4 py-2 text-sm": size === "sm",
                        "px-8 py-3 text-base": size === "md",
                        "px-10 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
