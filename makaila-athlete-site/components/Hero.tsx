import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col justify-center items-center bg-bruin-navy overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/makaila-headshot.webp"
        alt="Makaila Schneider Hero"
        fill
        className="object-cover object-center w-full h-full opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-bruin-navy/80" />
    </div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
      <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
        Makaila Schneider
      </h1>
      <p className="text-lg sm:text-2xl font-body text-bruin-gold font-semibold mb-2 tracking-wide uppercase">
        SLCC Bruins | Softball Infielder | Scholar-Athlete
      </p>
      <p className="text-base sm:text-lg font-body text-white/90 mb-8 max-w-xl">
        Driven. Versatile. Ready to make an impact on and off the field.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-white hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
          <a href="#athletic-profile">View Athletic Profile</a>
        </Button>
        <Button asChild className="bg-white text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-bruin-gold hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </div>
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <span className="block w-2 h-8 bg-bruin-gold rounded-full opacity-80" />
    </div>
  </section>
);

export default Hero; 