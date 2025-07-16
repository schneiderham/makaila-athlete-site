import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => (
  <section
    id="hero"
    className="relative w-full flex items-center justify-center bg-white overflow-hidden"
    style={{ minHeight: '80vh' }} // Reduced vertical whitespace
  >
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-8 gap-8">
      
      {/* Text block on the left */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl md:pr-12 lg:pr-20 xl:pr-32">
        <span className="uppercase text-bruin-gold font-bold tracking-[0.25em] text-xs sm:text-sm mb-4">
          Salt Lake Community College
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-bruin-navy mb-4 leading-tight">
          Makaila Schneider
        </h1>
        <div className="text-xl sm:text-2xl font-heading font-extrabold text-bruin-gold uppercase mb-4 tracking-wide">
          SLCC Bruins <span className="text-bruin-navy">|</span> Softball Infielder
        </div>
        <p className="text-base sm:text-lg font-body text-bruin-navy/90 mb-10 max-w-lg leading-snug">
          Driven. Versatile. Ready to make an impact on and off the field.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-10 py-4 rounded-full shadow-card hover:bg-bruin-navy hover:text-bruin-gold border-2 border-bruin-gold transition-all text-xl w-full sm:w-auto">
            <a href="#athletic-profile">View Athletic Profile</a>
          </Button>
          <Button asChild className="bg-white text-bruin-navy font-bold px-10 py-4 rounded-full shadow-card hover:bg-bruin-gold hover:text-bruin-navy border-2 border-bruin-gold transition-all text-xl w-full sm:w-auto">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>

      {/* Player image on the right */}
      <div className="flex-1 flex items-center justify-center relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] max-w-6xl">
        <Image
          src="/assets/L1Q_1940_compressed-removebg-preview.png"
          width={4}
          height={6}
          layout="responsive"
          className="object-contain object-center scale-[1.6]"  // Increase size further
          alt="Makaila Schneider Floating Hero"
          priority          
        />
      </div>
    </div>
  </section>
);

export default Hero;
