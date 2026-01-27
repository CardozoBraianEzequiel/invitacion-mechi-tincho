import { useState, useMemo, useEffect } from "react";
import { Section } from "../ui/Section";
import { useLightbox } from "../../hooks/useLightbox";

// Import all photos from the gallery folder
const photoModules = import.meta.glob('../../assets/seccion_fotos/*.JPG', { eager: true, import: 'default' }) as Record<string, string>;

// Convert to array, excluding .DS_Store and PORTADA
const allPhotos = Object.entries(photoModules)
    .filter(([path]) => !path.includes('.DS_Store') && !path.includes('PORTADA'))
    .map(([path, src]) => ({
        src,
        alt: path.split('/').pop()?.replace('.JPG', '') || 'Foto'
    }));

export const PhotoGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const { setLightboxOpen } = useLightbox();

    // Notify context when lightbox opens/closes
    useEffect(() => {
        setLightboxOpen(selectedIndex !== null);
    }, [selectedIndex, setLightboxOpen]);

    // Select 6 random photos for preview
    const previewPhotos = useMemo(() => {
        const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 6);
    }, []);

    const openLightbox = (photo: { src: string; alt: string }) => {
        const index = allPhotos.findIndex(p => p.src === photo.src);
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? allPhotos.length - 1 : selectedIndex - 1);
        }
    };

    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === allPhotos.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    return (
        <Section id="fotos" alternate>
            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-wedding-sage mb-2">Galería de fotos</h2>
                <p className="text-wedding-text/70">Momentos que atesoramos juntos</p>
            </div>

            {/* Preview Grid - 6 random photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {previewPhotos.map((photo, index) => (
                    <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => openLightbox(photo)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl z-50 transition-colors"
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        ×
                    </button>

                    {/* Previous Button */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl z-50 transition-colors p-2"
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        aria-label="Foto anterior"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <div
                        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={allPhotos[selectedIndex].src}
                            alt={allPhotos[selectedIndex].alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl z-50 transition-colors p-2"
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        aria-label="Foto siguiente"
                    >
                        ›
                    </button>
                </div>
            )}
        </Section>
    );
};
