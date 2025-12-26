import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { siteConfig } from "../../config/siteConfig";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Cuándo", href: "#countdown" },
    { name: "Dónde", href: "#events" },
    { name: "Itinerario", href: "#itinerary" },
    { name: "Regalos", href: "#gifts" },
    { name: "RSVP", href: "#rsvp" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <div
                        className={cn(
                            "transition-all duration-300",
                        )}
                    >
                        {/* Logo handling: White when top, Original color when scrolled */}
                        <img
                            src={siteConfig.images.logo}
                            alt={siteConfig.couple.names}
                            className={cn(
                                "h-12 w-auto transition-all duration-300",
                                !isScrolled && "drop-shadow-lg"
                            )}
                        />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={cn(
                                    "text-sm uppercase tracking-widest font-medium hover:text-wedding-gold transition-colors",
                                    isScrolled ? "text-wedding-text" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 focus:outline-none"
                    >
                        {isOpen ? (
                            <X className={isScrolled ? "text-wedding-text" : "text-white"} />
                        ) : (
                            <Menu className={isScrolled ? "text-wedding-text" : "text-white"} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-wedding-cream flex flex-col justify-center items-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="font-serif text-3xl text-wedding-sage hover:text-wedding-gold transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
