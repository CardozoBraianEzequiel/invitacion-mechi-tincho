import { siteConfig } from "../../config/siteConfig";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl uppercase tracking-[0.2em]"
                >
                    {siteConfig.hero.subtitle}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                    {siteConfig.hero.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-24 h-px bg-white/60 my-4"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light"
                >
                    {siteConfig.couple.date}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 pt-8"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {siteConfig.hero.ctaPrimary}
                    </Button>
                    <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-wedding-text"
                        size="lg"
                        onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {siteConfig.hero.ctaSecondary}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
