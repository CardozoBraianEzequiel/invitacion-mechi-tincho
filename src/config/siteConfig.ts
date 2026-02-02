import logoImg from '../assets/logo1_ok.png';
import footerLogoImg from '../assets/logo2_ok.png';
import martinChildImg from '../assets/martin_nene.jpg';
import mechiChildImg from '../assets/mechi_nena.jpg';
import ceremonyImg from '../assets/san_jose.jpg';
import partyImg from '../assets/salon.jpg';
import heroImg from '../assets/portada.jpg';

export const siteConfig = {
    couple: {
        names: "Mercedes & Martín",
        shortNames: ["Mercedes", "Martín"],
        date: "16 de Mayo de 2026",
        timestamp: "2026-05-16T20:00:00", // ISO format for countdown
    },
    hero: {
        title: "Mercedes & Martín",
        subtitle: "¡Nos casamos!",
        ctaPrimary: "Confirmar asistencia",
        ctaSecondary: "Ver detalles",
    },
    ceremony: {
        title: "Ceremonia",
        time: "20:00 hs", // Placeholder
        placeName: "Parroquia San Jose", // User asked to keep same as ref but use placeholder if unknown
        address: "Cnel. Brandsen 4962, B1874ACN Villa Dominico, Provincia de Buenos Aires",
        mapLink: "https://maps.app.goo.gl/L9esHgs6z9g9c78B8",
    },
    party: {
        title: "Fiesta",
        time: "21:30 hs", // Placeholder
        placeName: "Salón del Carmen",
        address: "Raquel Español 325, B1875 Wilde, Provincia de Buenos Aires",
        mapLink: "https://maps.app.goo.gl/5mhapjQwCWjYp9seA",
    },
    itinerary: [
        { time: "20:00", title: "Ceremonia Religiosa", icon: "church" },
        { time: "21:30", title: "Recepción", icon: "champagne" },
        { time: "22:30", title: "¡Comienza la fiesta!", icon: "party" },
    ],
    dressCode: {
        title: "Código de Vestimenta",
        description: "Elegante / Formal",
        note: "Te pedimos evitar el color blanco.",
    },
    gifts: {
        title: "Regalos",
        description: "Nuestra casa ya está completa, pero aún quedan muchos recuerdos por crear. Si querés hacernos un regalo, podés ayudarnos a cumplir el sueño de nuestra luna de miel. Gracias por acompañarnos en este día tan especial.",
        ars: {
            title: "Cuenta en Pesos",
            cbu: "0150909401000117740056",
            alias: "MYM.BODA2026",
        },
        usd: {
            title: "Cuenta en Dólares",
            cbu: "0150909411000107142825",
            alias: "BODA.MYM2026.USD",
        }
    },
    playlist: {
        title: "Música",
        description: "¡Ayudanos a armar la playlist! Sumá las canciones que no pueden faltar.",
        spotifyLink: "https://open.spotify.com/playlist/5qKhlkSphYLGit5TCV6JU3?si=MV1z_mrcQAiEm855nZcY7w&pi=mRUMYwxpRgOCm&pt=3c6170cb2273129fb557980e6aeee3ce",
        buttonText: "Sumar canciones",
    },
    rsvp: {
        title: "Confirmación de Asistencia",
        description: "Por favor confirmá tu asistencia antes del 1 de Abril.",
        formUrl: "#", // Link to Google Form or similar
        sheetUrl: "https://script.google.com/macros/s/AKfycbwWFOKHYGx3tfoOfEhgznxcn02gfXRZPpGksHHikXjQde9_7ovwxhB-3oKzV20XmM_xcg/exec",
        whatsappPhone: "5491100000000",
    },
    images: {
        logo: logoImg,
        footerLogo: footerLogoImg,
        hero: heroImg,
        countdown: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2787&auto=format&fit=crop", // Flowers
        ceremony: ceremonyImg,
        party: partyImg,
        couple: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2787&auto=format&fit=crop", // Placeholder
        coupleMartin: martinChildImg,
        coupleMechi: mechiChildImg,
    }
}

export type SiteConfig = typeof siteConfig;
