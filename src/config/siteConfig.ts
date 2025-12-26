import logoImg from '../assets/logo1_ok.png';
import footerLogoImg from '../assets/logo2_ok.png';

export const siteConfig = {
    couple: {
        names: "Martín & Mercedes",
        shortNames: ["Martín", "Mercedes"],
        date: "16 de Mayo de 2026",
        timestamp: "2026-05-16T18:00:00", // ISO format for countdown
    },
    hero: {
        title: "Martín & Mercedes",
        subtitle: "¡Nos casamos!",
        ctaPrimary: "Confirmar asistencia",
        ctaSecondary: "Ver detalles",
    },
    ceremony: {
        title: "Ceremonia",
        time: "18:00 hs", // Placeholder
        placeName: "Parroquia San Jose", // User asked to keep same as ref but use placeholder if unknown
        address: "Cnel. Brandsen 4962, B1874ACN Villa Dominico, Provincia de Buenos Aires",
        mapLink: "https://maps.app.goo.gl/L9esHgs6z9g9c78B8",
    },
    party: {
        title: "Celebración",
        time: "20:00 hs", // Placeholder
        placeName: "Salón del Carmen",
        address: "Raquel Español 325, B1875 Wilde, Provincia de Buenos Aires",
        mapLink: "https://maps.app.goo.gl/5mhapjQwCWjYp9seA",
    },
    itinerary: [
        { time: "18:00", title: "Ceremonia Religiosa", icon: "church" },
        { time: "19:30", title: "Recepción", icon: "champagne" },
        { time: "21:00", title: "Cena", icon: "dinner" },
        { time: "23:00", title: "Fiesta", icon: "party" },
    ],
    dressCode: {
        title: "Código de Vestimenta",
        description: "Elegante / Formal",
        note: "Te pedimos evitar el color blanco.",
    },
    gifts: {
        title: "Regalos",
        description: "Tu presencia es nuestro mejor regalo. Si querés ayudarnos con nuestra luna de miel:",
        cbu: "0000003100000000000000",
        alias: "M.Y.M.CASAMIENTO",
        bank: "Banco Santander",
    },
    playlist: {
        title: "Música",
        description: "¡Ayudanos a armar la playlist! Sumá las canciones que no pueden faltar.",
        spotifyLink: "#",
        buttonText: "Sumar canciones",
    },
    rsvp: {
        title: "Confirmación de Asistencia",
        description: "Por favor confirmá tu asistencia antes del 1 de Abril.",
        formUrl: "#", // Link to Google Form or similar
        whatsappPhone: "5491100000000",
    },
    images: {
        logo: logoImg,
        footerLogo: footerLogoImg,
        hero: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Elegant wedding placeholder
        countdown: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2787&auto=format&fit=crop", // Flowers
        ceremony: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        party: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    }
}

export type SiteConfig = typeof siteConfig;
