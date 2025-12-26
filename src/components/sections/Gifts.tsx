import { Gift, Copy, Check } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { useState } from "react";

const CopyItem = ({ label, value }: { label: string; value: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg border border-stone-200 w-full mb-3">
            <span className="text-sm text-stone-500 uppercase tracking-wider mb-2 sm:mb-0 mr-4">{label}:</span>
            <div className="flex items-center space-x-3">
                <span className="font-mono font-medium text-lg text-wedding-text">{value}</span>
                <button
                    onClick={handleCopy}
                    className="p-2 text-wedding-sage hover:bg-wedding-sage/10 rounded-full transition-colors"
                    title="Copiar"
                    type="button"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
};

export const Gifts = () => {
    return (
        <Section id="gifts" alternate>
            <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
                <div className="bg-wedding-cream p-4 rounded-full mb-6">
                    <Gift className="w-8 h-8 text-wedding-gold" />
                </div>
                <h2 className="font-serif text-3xl text-wedding-sage mb-4">{siteConfig.gifts.title}</h2>
                <p className="text-wedding-text/80 mb-8 leading-relaxed">
                    {siteConfig.gifts.description}
                </p>

                <div className="w-full bg-white/50 p-6 md:p-8 rounded-2xl shadow-sm">
                    <CopyItem label="CBU" value={siteConfig.gifts.cbu} />
                    <CopyItem label="Alias" value={siteConfig.gifts.alias} />
                    <div className="mt-4 text-sm text-stone-500">
                        Titular: {siteConfig.couple.names}<br />
                        Banco: {siteConfig.gifts.bank}
                    </div>
                </div>
            </div>
        </Section>
    );
};
