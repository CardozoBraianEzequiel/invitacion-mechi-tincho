import { createContext, useContext, useState, type ReactNode } from 'react';

interface LightboxContextType {
    isLightboxOpen: boolean;
    setLightboxOpen: (open: boolean) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
    const [isLightboxOpen, setLightboxOpen] = useState(false);

    return (
        <LightboxContext.Provider value={{ isLightboxOpen, setLightboxOpen }}>
            {children}
        </LightboxContext.Provider>
    );
};

export const useLightbox = () => {
    const context = useContext(LightboxContext);
    if (context === undefined) {
        throw new Error('useLightbox must be used within a LightboxProvider');
    }
    return context;
};
