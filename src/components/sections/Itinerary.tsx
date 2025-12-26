import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { CircleUser, Music, Utensils, PartyPopper } from "lucide-react"; // Using generic icons matching config keys if possible

// Helper to map icon string to Lucide component
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "church": return <CircleUser className="w-5 h-5" />; // Placeholder icon
        case "champagne": return <Utensils className="w-5 h-5" />;
        case "dinner": return <Utensils className="w-5 h-5" />;
        case "party": return <PartyPopper className="w-5 h-5" />;
        case "music": return <Music className="w-5 h-5" />;
        default: return <CircleUser className="w-5 h-5" />;
    }
};

export const Itinerary = () => {
    return (
        <Section id="itinerary">
            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-wedding-sage">Itinerario</h2>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="relative border-l-2 border-wedding-gold/30 ml-6 space-y-10 pl-8 py-2">
                    {siteConfig.itinerary.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Dot */}
                            <div className="absolute -left-[41px] top-1 bg-wedding-cream border-2 border-wedding-gold rounded-full p-2">
                                <div className="text-wedding-gold">{getIcon(item.icon)}</div>
                            </div>

                            {/* Content */}
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                                <span className="text-wedding-gold font-bold text-sm block mb-1">{item.time} hs</span>
                                <h3 className="font-serif text-xl text-wedding-text">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
