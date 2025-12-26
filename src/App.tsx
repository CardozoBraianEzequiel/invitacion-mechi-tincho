import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Countdown } from "./components/sections/Countdown";
import { Events } from "./components/sections/Events";
import { Itinerary } from "./components/sections/Itinerary";
import { Map } from "./components/sections/Map";
import { DressCode } from "./components/sections/DressCode";
import { Gifts } from "./components/sections/Gifts";
import { Playlist } from "./components/sections/Playlist";
import { RSVP } from "./components/sections/RSVP";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <main className="min-h-screen font-sans text-stone-800 bg-wedding-cream selection:bg-wedding-sage/30">
      <Navbar />
      <Hero />
      <Countdown />
      <Events />
      <Itinerary />
      <DressCode />
      <Map />
      <Gifts />
      <Playlist />
      <RSVP />
      <Footer />
    </main>
  );
}

export default App;
