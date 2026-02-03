import { useState, useEffect } from "react";
import { siteConfig } from "../../config/siteConfig";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { CheckCircle } from "lucide-react";
import invitadosData from "../../data/invitados.json";

interface Invitado {
    id: number;
    nombre_completo: string;
}

export const RSVP = () => {
    const [formData, setFormData] = useState({
        name: "",
        attendance: "si",
        restrictions: "Sin restriccion"
    });

    const [suggestions, setSuggestions] = useState<Invitado[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [confirmedGuests, setConfirmedGuests] = useState<string[]>([]);

    const [nameError, setNameError] = useState<string | null>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Cargar invitados ya confirmados al iniciar
    useEffect(() => {
        const fetchConfirmed = async () => {
            if (!siteConfig.rsvp.sheetUrl) return;
            try {
                // Forzamos que sea un llamado limpio sin parámetros
                const response = await fetch(siteConfig.rsvp.sheetUrl, { cache: 'no-store' });
                const text = await response.text();

                try {
                    const data = JSON.parse(text);
                    if (Array.isArray(data)) {
                        setConfirmedGuests(data);
                    }
                } catch (e) {
                    // Fail silently
                }
            } catch (error) {
                // Fail silently
            }
        };
        fetchConfirmed();
    }, []);

    const formatName = (name: string) => {
        return name
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNameError(null);

        const inputName = formData.name.trim();
        let finalName = inputName;

        // 1. Intentar encontrar coincidencia exacta (ignore case) en la lista oficial
        const guest = invitadosData.find(
            inv => inv.nombre_completo.toLowerCase() === inputName.toLowerCase()
        );

        if (guest) {
            // Si está en la lista, usamos el nombre oficial (con mayúsculas correctas)
            finalName = guest.nombre_completo;
        } else {
            // 2. Si no está en la lista, verificamos si es "basura" o un nombre completo
            const words = inputName.split(/\s+/).filter(w => w.length > 1); // palabras de al menos 2 letras

            if (words.length < 2 || inputName.length < 4) {
                setNameError("El nombre no está en la lista o es inválido. Por favor, ingresá tu nombre completo.");
                return;
            }

            // 3. Si parece un nombre completo pero no está en la lista, lo capitalizamos
            finalName = formatName(inputName);
        }

        setIsSubmitting(true);

        if (!siteConfig.rsvp.sheetUrl) {
            alert("Error de configuración: URL de Google Sheets no definida.");
            setIsSubmitting(false);
            return;
        }

        try {
            const params = new URLSearchParams({
                name: finalName,
                attendance: formData.attendance,
                restrictions: formData.restrictions
            });

            const url = `${siteConfig.rsvp.sheetUrl}?${params.toString()}`;

            await fetch(url, {
                method: "GET",
                mode: "no-cors"
            });

            setIsSuccess(true);
            setConfirmedGuests(prev => [...prev, finalName]);
            setFormData({ name: "", attendance: "si", restrictions: "Sin restriccion" });
        } catch (error) {
            alert("Hubo un error al enviar tu confirmación. Por favor intentá nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "name") {
            setNameError(null);
            if (value.length > 0) {
                const matches = invitadosData.filter(invitado =>
                    invitado.nombre_completo.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestions(matches);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        }
    };

    const handleSelectInvitado = (nombre: string) => {
        setFormData(prev => ({ ...prev, name: nombre }));
        setSuggestions([]);
        setShowSuggestions(false);
        setNameError(null);
    };

    return (
        <Section id="rsvp" alternate>
            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-wedding-sage mb-2">{siteConfig.rsvp.title}</h2>
                <p className="text-wedding-text/70">{siteConfig.rsvp.description}</p>
            </div>

            <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-stone-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {isSuccess && (
                        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center font-medium">
                            ¡Gracias! Tu confirmación ha sido enviada.
                        </div>
                    )}
                    <div className="relative">
                        <label className="block text-sm font-medium text-stone-600 mb-1">Nombre y Apellido</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => {
                                if (formData.name) handleChange({ target: { name: 'name', value: formData.name } } as any);
                            }}
                            autoComplete="off"
                            className={`w-full px-4 py-3 rounded-lg border ${nameError ? 'border-red-300 ring-1 ring-red-100' : 'border-stone-200'} focus:ring-2 focus:ring-wedding-sage focus:border-transparent outline-none transition-all bg-stone-50`}
                            placeholder="Busca tu nombre..."
                        />
                        {nameError && (
                            <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{nameError}</p>
                        )}
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="absolute z-20 w-full bg-white mt-1 border border-stone-100 rounded-lg shadow-xl max-h-60 overflow-y-auto overflow-x-hidden">
                                {suggestions.map((invitado) => {
                                    const isAlreadyConfirmed = confirmedGuests.includes(invitado.nombre_completo);
                                    return (
                                        <li
                                            key={invitado.id}
                                            onClick={() => handleSelectInvitado(invitado.nombre_completo)}
                                            className={`px-4 py-3 hover:bg-wedding-sage/10 cursor-pointer transition-colors border-b border-stone-50 last:border-0 flex items-center justify-between ${isAlreadyConfirmed ? "text-stone-400" : "text-stone-700"
                                                }`}
                                        >
                                            <span>{invitado.nombre_completo}</span>
                                            {isAlreadyConfirmed && (
                                                <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Confirmado
                                                </span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
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
                        <select
                            name="restrictions"
                            value={formData.restrictions}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-wedding-sage outline-none bg-stone-50"
                        >
                            <option value="Sin restriccion">Sin restriccion</option>
                            <option value="Vegetariana">Vegetariana</option>
                            <option value="Vegana">Vegana</option>
                            <option value="Celiaca">Celiaca</option>
                        </select>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full pt-3 pb-3 text-lg shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
                    </Button>
                </form>
            </div>
        </Section>
    );
};
