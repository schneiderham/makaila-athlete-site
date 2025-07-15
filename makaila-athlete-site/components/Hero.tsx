import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-r from-white via-white to-blue-100 overflow-hidden"
    style={{ minHeight: '90vh' }}
  >
    <div className="relative z-10 flex flex-row items-center justify-between w-full max-w-7xl mx-auto gap-0 md:gap-8 px-4 md:px-12 lg:px-20">
      {/* Blurred hero content box on the left */}
      <div className="flex-1 min-w-0 max-w-[60%] md:max-w-[55%] lg:max-w-[50%] xl:max-w-[45%] 2xl:max-w-[40%] backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-8 sm:p-14 md:p-16 lg:p-20 xl:p-24 my-12 md:my-24"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}>
        <span className="uppercase text-bruin-gold font-bold tracking-widest text-sm sm:text-base mb-2 block">Salt Lake Community College</span>
        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-bruin-navy mb-4 leading-tight">
          Makaila Schneider
        </h1>
        <p className="text-lg sm:text-2xl font-body text-bruin-gold font-semibold mb-2 tracking-wide uppercase">
          SLCC Bruins | Softball Infielder | Scholar-Athlete
        </p>
        <p className="text-base sm:text-lg font-body text-bruin-navy/90 mb-8 max-w-xl">
          Driven. Versatile. Ready to make an impact on and off the field.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-white hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
            <a href="#athletic-profile">View Athletic Profile</a>
          </Button>
          <Button asChild className="bg-white text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-bruin-gold hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
      {/* Athlete image on the right with soft gradient background */}
      <div className="flex-1 flex items-end justify-end min-w-0 max-w-[40%] md:max-w-[45%] lg:max-w-[50%] xl:max-w-[55%] 2xl:max-w-[60%] relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Soft gradient background behind player */}
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-blue-100 via-white/60 to-transparent rounded-2xl" />
        <div className="relative z-10 w-full h-full flex items-end justify-end">
          <Image
            src="/assets/L1Q_1940_compressed-removebg-preview.png"
            alt="Makaila Schneider Floating Hero"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 