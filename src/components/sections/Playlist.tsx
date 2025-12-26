import { Music } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const Playlist = () => {
    return (
        <Section id="playlist">
            <div className="bg-wedding-dark text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative background elements can go here */}

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
                        <Music className="w-8 h-8 text-wedding-gold" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl mb-4">{siteConfig.playlist.title}</h2>
                    <p className="text-white/80 mb-8 max-w-lg mx-auto">
                        {siteConfig.playlist.description}
                    </p>

                    <Button
                        variant="secondary"
                        onClick={() => window.open(siteConfig.playlist.spotifyLink, '_blank')}
                        className="bg-[#1DB954] text-white hover:bg-[#1ed760]" // Spotify Green override
                    >
                        {siteConfig.playlist.buttonText}
                    </Button>
                </div>
            </div>
        </Section>
    );
};
