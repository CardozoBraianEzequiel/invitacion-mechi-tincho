import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    alternate?: boolean; // If true, use slightly different background
    delay?: number;
}

export const Section = ({ id, className, children, alternate = false, delay = 0 }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-4 overflow-hidden",
                alternate ? "bg-stone-100" : "bg-wedding-cream",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};
