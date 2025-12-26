import { siteConfig } from "../../config/siteConfig";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { MapPin } from "lucide-react";

export const Map = () => {
    return (
        <Section id="map" className="!p-0 !max-w-none">
            <div className="w-full h-[400px] bg-stone-200 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-center bg-no-repeat bg-contain filter blur-sm grayscale" />

                <div className="relative z-10 text-center bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm max-w-sm mx-4">
                    <MapPin className="w-10 h-10 text-wedding-sage mx-auto mb-4" />
                    <h3 className="font-serif text-2xl text-wedding-text mb-4">Ubicaciones</h3>
                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(siteConfig.ceremony.mapLink, '_blank')}
                        >
                            Ver Iglesia en Mapa
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(siteConfig.party.mapLink, '_blank')}
                        >
                            Ver Salón en Mapa
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
