import { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const RSVP = () => {
    const [formData, setFormData] = useState({
        name: "",
        attendance: "si",
        restrictions: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Formulario enviado (simulado) para: ${formData.name}`);
        // In real app, submit to API or redirect to WhatsApp
        // window.location.href = siteConfig.rsvp.formUrl; 
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="rsvp" className="bg-wedding-sage/5">
            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-wedding-sage mb-2">{siteConfig.rsvp.title}</h2>
                <p className="text-wedding-text/70">{siteConfig.rsvp.description}</p>
            </div>

            <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-stone-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-600 mb-1">Nombre y Apellido</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-wedding-sage focus:border-transparent outline-none transition-all bg-stone-50"
                            placeholder="Ej: Juan Pérez"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-stone-600 mb-1">¿Asistís?</label>
                            <select
                                name="attendance"
                                value={formData.attendance}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-wedding-sage outline-none bg-stone-50"
                            >
                                <option value="si">¡Sí, confirmo!</option>
                                <option value="no">No podré asistir</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone-600 mb-1">Restricciones Alimentarias</label>
                        <input
                            type="text"
                            name="restrictions"
                            value={formData.restrictions}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-wedding-sage outline-none bg-stone-50"
                            placeholder="Ej: Vegetariano, Celiaquía, etc."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone-600 mb-1">Mensaje para los novios</label>
                        <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-wedding-sage outline-none bg-stone-50"
                            placeholder="¡Dejá tu saludo!"
                        />
                    </div>

                    <Button type="submit" className="w-full pt-3 pb-3 text-lg shadow-lg">
                        Enviar Confirmación
                    </Button>
                </form>
            </div>
        </Section>
    );
};
