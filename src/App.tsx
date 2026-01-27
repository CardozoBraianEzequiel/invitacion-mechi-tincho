import { Navbar } from "./components/layout/Navbar";
import { MusicPlayer } from "./components/ui/MusicPlayer";
import { Hero } from "./components/sections/Hero";
import { Countdown } from "./components/sections/Countdown";
import { CouplePhoto } from "./components/sections/CouplePhoto";
import { Events } from "./components/sections/Events";
import { Story } from "./components/sections/Story";
import { TriviaGame } from "./components/sections/TriviaGame";
import { Itinerary } from "./components/sections/Itinerary";
import { DressCode } from "./components/sections/DressCode";
import { Gifts } from "./components/sections/Gifts";
import { Playlist } from "./components/sections/Playlist";
import { RSVP } from "./components/sections/RSVP";
import { PhotoGallery } from "./components/sections/PhotoGallery";
import { Footer } from "./components/sections/Footer";
import { LightboxProvider } from "./hooks/useLightbox";

function App() {
  return (
    <LightboxProvider>
      <main className="min-h-screen font-sans text-stone-800 bg-wedding-cream selection:bg-wedding-sage/30">
        <MusicPlayer />
        <Navbar />
        <Hero />
        <Countdown />
        <CouplePhoto />
        <Events />
        <Itinerary />
        <Story />
        <DressCode />
        <Gifts />
        <Playlist />
        <RSVP />
        <TriviaGame />
        <PhotoGallery />
        <Footer />
      </main>
    </LightboxProvider>
  );
}

export default App;
