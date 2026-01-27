import { motion } from "framer-motion";
// @ts-ignore
import storyBg from "../../assets/seccion_fotos/IMG_2271.JPG";

export const Story = () => {
    return (
        <section id="story" className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center py-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${storyBg})`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" /> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="w-16 h-1 bg-wedding-gold mx-auto mb-8 rounded-full opacity-80" />

                    <p className="font-serif text-3xl md:text-5xl text-white leading-relaxed italic drop-shadow-2xl">
                        "¡Esta historia comenzó el 16 de mayo del 2016, 10 años después nos encontramos en el altar para dar nuestro Si por siempre!"
                    </p>

                    <div className="w-16 h-1 bg-wedding-gold mx-auto mt-8 rounded-full opacity-80" />
                </motion.div>
            </div>
        </section>
    );
};
