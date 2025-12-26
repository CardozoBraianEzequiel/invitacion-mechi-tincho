import { siteConfig } from "../../config/siteConfig";

export const Footer = () => {
    return (
        <footer className="bg-wedding-sage text-white py-12 text-center">
            {/* <h2 className="font-serif text-3xl md:text-5xl mb-6">
                {siteConfig.couple.shortNames[0]} & {siteConfig.couple.shortNames[1]}
            </h2> */}
            <img
                src={siteConfig.images.footerLogo}
                alt={siteConfig.couple.names}
                className="h-20 w-auto mx-auto mb-6"
            />
            <p className="text-white/80 text-sm tracking-widest uppercase mb-8">
                ¡Gracias por acompañarnos!
            </p>
            <div className="text-white/40 text-xs">
                © 2026 {siteConfig.couple.names}
            </div>
        </footer>
    );
};
