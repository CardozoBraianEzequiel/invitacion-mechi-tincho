import { Shirt } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";

export const DressCode = () => {
    return (
        <Section id="dresscode" className="py-10">
            <div className="flex flex-col items-center text-center p-8 border border-wedding-gold/20 rounded-xl max-w-lg mx-auto bg-white/50">
                <Shirt className="w-10 h-10 text-wedding-sage mb-4" />
                <h2 className="font-serif text-2xl text-wedding-text mb-2">{siteConfig.dressCode.title}</h2>
                <p className="font-medium text-lg mb-2">{siteConfig.dressCode.description}</p>
                <p className="text-sm text-stone-500 italic">"{siteConfig.dressCode.note}"</p>
            </div>
        </Section>
    );
};
