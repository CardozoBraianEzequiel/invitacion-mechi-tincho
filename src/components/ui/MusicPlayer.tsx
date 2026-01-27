import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import songUrl from '../../assets/songs/cancion_floricienta.mp3';
import { useLightbox } from '../../hooks/useLightbox';

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { isLightboxOpen } = useLightbox();

    useEffect(() => {
        audioRef.current = new Audio(songUrl);
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <AnimatePresence>
            {!isLightboxOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-24 right-4 z-[100] md:top-28 md:right-6"
                >
                    <motion.button
                        onClick={togglePlay}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={isPlaying ? {
                            scale: [1, 1.1, 1],
                            boxShadow: "0 0 15px rgba(212, 175, 55, 0.6)"
                        } : {}}
                        transition={isPlaying ? {
                            duration: 1.5,
                            repeat: Infinity,
                        } : {}}
                        className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl border-2 border-wedding-gold/40 text-wedding-sage hover:bg-wedding-sage hover:text-white transition-colors duration-300 group flex items-center justify-center w-10 h-10"
                        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
                    >
                        {isPlaying ? (
                            <Pause className="w-4 h-4 fill-current" />
                        ) : (
                            <div className="relative flex items-center justify-center">
                                <Play className="w-4 h-4 ml-0.5 fill-current" />
                                <span className="absolute -top-2 -right-2 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wedding-gold opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-wedding-gold"></span>
                                </span>
                            </div>
                        )}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
