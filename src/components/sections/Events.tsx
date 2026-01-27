import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

const EventCard = ({
    title,
    time,
    place,
    address,
    image,
    mapLink
}: {
    title: string;
    time: string;
    place: string;
    address: string;
    image: string;
    mapLink: string;
}) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow items-center text-center">
            <h3 className="font-serif text-2xl text-wedding-sage mb-2">{title}</h3>

            <div className="flex items-center text-wedding-gold my-2">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{time}</span>
            </div>

            <div className="flex flex-col items-center mb-6">
                <span className="font-bold text-wedding-text text-lg mb-1">{place}</span>
                <span className="text-wedding-text/70 text-sm px-4">{address}</span>
            </div>

            <div className="mt-auto">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(mapLink, '_blank')}
                >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver Ubicación
                </Button>
            </div>
        </div>
    </div>
);

export const Events = () => {
    return (
        <Section id="events" alternate>
            <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-wedding-text mb-4">Información del Evento</h2>
                <p className="text-wedding-text/70 max-w-xl mx-auto">
                    Los esperamos para compartir este momento único con nosotros.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <EventCard
                    title={siteConfig.ceremony.title}
                    time={siteConfig.ceremony.time}
                    place={siteConfig.ceremony.placeName}
                    address={siteConfig.ceremony.address}
                    image={siteConfig.images.ceremony}
                    mapLink={siteConfig.ceremony.mapLink}
                />
                <EventCard
                    title={siteConfig.party.title}
                    time={siteConfig.party.time}
                    place={siteConfig.party.placeName}
                    address={siteConfig.party.address}
                    image={siteConfig.images.party}
                    mapLink={siteConfig.party.mapLink}
                />
            </div>
        </Section>
    );
};
