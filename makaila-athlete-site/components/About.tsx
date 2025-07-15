import Image from "next/image";

const About = () => (
  <section id="about" className="w-full max-w-4xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10 animate-fadeIn">
    {/* Photo */}
    <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-card border-4 border-bruin-gold bg-white">
      <Image
        src="/assets/makaila-headshot.webp"
        alt="Makaila Schneider Portrait"
        width={224}
        height={224}
        className="object-cover w-full h-full"
        priority
      />
    </div>
    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-4">About Makaila</h2>
      <div className="w-16 h-1 bg-bruin-gold mx-auto md:mx-0 mb-6 rounded-full" />
      <p className="text-lg font-body text-bruin-navy mb-4">
        Hi, I’m Makaila Schneider—a passionate student-athlete, leader, and teammate. I believe in hard work, integrity, and giving my best in everything I do, both on the field and in the classroom.
      </p>
      <ul className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
        <li className="bg-bruin-gold text-bruin-navy font-bold px-4 py-2 rounded-full text-sm shadow-card">Driven</li>
        <li className="bg-bruin-navy text-white font-bold px-4 py-2 rounded-full text-sm shadow-card">Team Player</li>
        <li className="bg-white text-bruin-navy font-bold px-4 py-2 rounded-full text-sm border-2 border-bruin-gold shadow-card">Scholar-Athlete</li>
      </ul>
      <blockquote className="italic text-bruin-navy/80 font-body border-l-4 border-bruin-gold pl-4 mt-4">
        "I strive to lead by example, support my teammates, and make a positive impact on and off the field."
      </blockquote>
    </div>
  </section>
);

export default About; 