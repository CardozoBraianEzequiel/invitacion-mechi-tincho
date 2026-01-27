import { useCountdown } from "../../hooks/useCountdown";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white shadow-lg rounded-full border border-wedding-gold/20 mb-3">
            <span className="text-3xl md:text-4xl font-serif text-wedding-sage font-bold">
                {value}
            </span>
        </div>
        <span className="text-xs md:text-sm uppercase tracking-widest text-wedding-text">{label}</span>
    </div>
);

export const Countdown = () => {
    const timeLeft = useCountdown(siteConfig.couple.timestamp);

    return (
        <Section id="countdown" className="text-center" alternate>
            <h2 className="text-3xl md:text-4xl font-serif text-wedding-sage mb-2">
                Falta muy poquito
            </h2>
            <p className="text-wedding-text/80 mb-10">
                ¡Contando los segundos para celebrar con ustedes!
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                <TimeBox value={timeLeft.days} label="Días" />
                <TimeBox value={timeLeft.hours} label="Horas" />
                <TimeBox value={timeLeft.minutes} label="Minutos" />
                <TimeBox value={timeLeft.seconds} label="Segundos" />
            </div>
        </Section>
    );
};
