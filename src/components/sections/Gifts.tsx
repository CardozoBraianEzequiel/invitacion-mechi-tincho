import { Gift, Copy, Check, CreditCard } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white/70 p-3 rounded-lg border border-stone-200 w-full mb-2 last:mb-0">
            <span className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider mb-1 sm:mb-0 mr-4 font-semibold">{label}:</span>
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-mono font-medium text-sm sm:text-base text-wedding-text truncate">{value}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 text-wedding-sage hover:bg-wedding-sage/10 rounded-full transition-colors shrink-0"
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
            <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
                <div className="bg-wedding-cream p-4 rounded-full mb-6 relative">
                    <Gift className="w-8 h-8 text-wedding-gold" />
                </div>
                <h2 className="font-serif text-3xl text-wedding-sage mb-4">{siteConfig.gifts.title}</h2>
                <p className="text-wedding-text/80 mb-10 leading-relaxed max-w-lg mx-auto">
                    {siteConfig.gifts.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 w-full">
                    {/* Pesos Account */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4 space-x-2">
                            <div className="p-2 bg-wedding-cream rounded-full">
                                <CreditCard className="w-5 h-5 text-wedding-text" />
                            </div>
                            <h3 className="font-serif text-xl text-wedding-text">{siteConfig.gifts.ars.title}</h3>
                        </div>
                        <CopyItem label="CBU" value={siteConfig.gifts.ars.cbu} />
                        <CopyItem label="Alias" value={siteConfig.gifts.ars.alias} />
                    </div>

                    {/* USD Account */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4 space-x-2">
                            <div className="p-2 bg-wedding-cream rounded-full">
                                <CreditCard className="w-5 h-5 text-wedding-gold" />
                            </div>
                            <h3 className="font-serif text-xl text-wedding-text">{siteConfig.gifts.usd.title}</h3>
                        </div>
                        <CopyItem label="CBU" value={siteConfig.gifts.usd.cbu} />
                        <CopyItem label="Alias" value={siteConfig.gifts.usd.alias} />
                    </div>
                </div>

                <div className="mt-8 text-sm text-stone-500">
                    Titular: Martín Alvarez <br />
                    (ICBC)
                </div>
            </div>
        </Section>
    );
};
