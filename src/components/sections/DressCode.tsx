import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore
import dressCodeImg from "../../assets/DRESS CODE.jpg";
// @ts-ignore
import adviceVideo from "../../assets/VideoGimeAccardi.mp4";
// @ts-ignore
import dressLineArt from "../../assets/dress_line_art.png";
// @ts-ignore
import suitLineArt from "../../assets/suit_line_art.png";

export const DressCode = () => {
    const [modalContent, setModalContent] = useState<"none" | "image" | "video">("none");

    return (
        <Section id="dresscode" className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Dress Code Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-wedding transition-all hover:shadow-xl border border-wedding-gold/10"
                >
                    <div className="w-20 h-24 mb-6 flex items-center justify-center">
                        <img src={dressLineArt} alt="Dress Icon" className="h-full object-contain opacity-80" />
                    </div>
                    <h3 className="font-serif text-2xl text-wedding-text mb-4">Código de vestimenta</h3>
                    <p className="text-wedding-text/80 mb-6 flex-grow">
                        Consulta las reglas y colores prohibidos. ¡Queremos que te sientas cómoda/o!
                        Si tenes alguna duda con el dress code escribinos.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-auto"
                        onClick={() => setModalContent("image")}
                    >
                        Ver foto
                    </Button>
                </motion.div>

                {/* Advice Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-wedding transition-all hover:shadow-xl border border-wedding-gold/10"
                >
                    <div className="w-20 h-24 mb-6 flex items-center justify-center">
                        <img src={suitLineArt} alt="Suit Icon" className="h-full object-contain opacity-80" />
                    </div>
                    <h3 className="font-serif text-2xl text-wedding-text mb-4">Consejo para los hombres</h3>
                    <p className="text-wedding-text/80 mb-6 flex-grow">
                        Un mensaje especial que no te podes perder.
                    </p>
                    <Button
                        variant="primary"
                        className="mt-auto"
                        onClick={() => setModalContent("video")}
                    >
                        Ver video
                    </Button>
                </motion.div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {modalContent !== "none" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setModalContent("none")}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setModalContent("none")}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-2">
                                {modalContent === "image" && (
                                    <img
                                        src={dressCodeImg}
                                        alt="Dress Code"
                                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                    />
                                )}
                                {modalContent === "video" && (
                                    <video
                                        src={adviceVideo}
                                        controls
                                        autoPlay
                                        className="w-full h-auto max-h-[85vh] rounded-lg"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* TikTok Tip Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 text-center bg-wedding-gold/5 p-8 rounded-3xl border border-wedding-gold/10 max-w-2xl mx-auto"
            >
                <p className="text-wedding-text/90 font-medium text-lg mb-4">
                    ¡Tip para saber si el color de tu vestido es el indicado!
                </p>
                <a
                    href="https://vm.tiktok.com/ZMDMqPrcn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-wedding-sage hover:text-wedding-sage/80 transition-colors font-serif text-xl underline underline-offset-4"
                >
                    Ver Video en TikTok
                    <ExternalLink className="w-4 h-4" />
                </a>
            </motion.div>
        </Section>
    );
};
