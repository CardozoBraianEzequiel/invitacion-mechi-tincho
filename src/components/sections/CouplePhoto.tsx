import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";

export const CouplePhoto = () => {
    return (
        <Section id="couple-photo" className="text-center pt-0 md:pt-0">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                <h2 className="font-serif text-4xl md:text-5xl text-wedding-sage mb-12">
                    ¡Estas dos criaturas se casan!
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
                    {/* Mechi Frame */}
                    <div className="bg-white p-4 pb-16 shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500 max-w-[300px] hover:z-10 relative">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-2">
                            <img
                                src={siteConfig.images.coupleMechi}
                                alt="Mechi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-serif text-3xl text-wedding-text/80 text-center absolute bottom-4 left-0 right-0">Mechi</p>
                    </div>

                    {/* Martin Frame */}
                    <div className="bg-white p-4 pb-16 shadow-xl rotate-[3deg] hover:rotate-0 transition-transform duration-500 max-w-[300px] hover:z-10 relative">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-2">
                            <img
                                src={siteConfig.images.coupleMartin}
                                alt="Martín"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-serif text-3xl text-wedding-text/80 text-center absolute bottom-4 left-0 right-0">Martín</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};
