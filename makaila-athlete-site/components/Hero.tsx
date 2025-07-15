import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-bruin-navy via-bruin-navy to-bruin-gold text-white text-center px-4 py-16"
  >
    <div className="absolute top-6 left-6">
      <Image src="/assets/bruin-bear.webp" alt="SLCC Bruins Logo" width={64} height={64} className="drop-shadow-xl" priority />
    </div>
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-6 rounded-full overflow-hidden border-4 border-bruin-gold shadow-xl bg-white flex items-center justify-center">
      <Image src="/assets/makaila-headshot.webp" alt="Makaila Schneider Headshot" fill className="object-cover" priority />
    </div>
    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">Makaila Schneider</h1>
    <p className="text-lg sm:text-xl font-body font-medium mb-2 text-bruin-gold">SLCC Bruins | Utility Player</p>
    <p className="text-base sm:text-lg font-body font-semibold mb-6 max-w-2xl mx-auto text-white/90">Driven student-athlete excelling on the field and in the classroom. Ready to make an impact at the next level.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild className="bg-bruin-navy text-white border-2 border-bruin-gold hover:bg-bruin-gold hover:text-bruin-navy font-bold text-lg px-8 py-3 rounded-full shadow-lg transition">
        <a href="#videos">Watch Highlights</a>
      </Button>
      <Button asChild className="bg-bruin-gold text-bruin-navy border-2 border-bruin-navy hover:bg-bruin-navy hover:text-bruin-gold font-bold text-lg px-8 py-3 rounded-full shadow-lg transition">
        <a href="#resume">View Resume</a>
      </Button>
      <Button asChild className="bg-white text-bruin-navy border-2 border-bruin-gold hover:bg-bruin-gold hover:text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition">
        <a href="#contact">Contact</a>
      </Button>
    </div>
  </section>
);

export default Hero; 