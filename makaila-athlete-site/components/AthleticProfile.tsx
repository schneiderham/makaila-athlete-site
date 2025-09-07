import { Button } from "./ui/button";
import YouTubeFeed from "./YouTubeFeed";

const stats = [
  { label: "Positions", value: "INF (2B/SS/3B)" },
  { label: "Height", value: "5'3\"" },
  { label: "Throws/Bats", value: "Right/Right" },
  { label: "School", value: "SLCC Bruins" },
  { label: "HS", value: "Yale Secondary '24" },
  { label: "Regular Season AVG", value: ".300" },
  { label: "Regular Season OPS", value: "1.015" },
  { label: "HR / RBI", value: "8 / 33" },
  { label: "SB", value: "5/5" },
  { label: "XBH (Reg.)", value: "16" },
  { label: "Fall AVG / OPS", value: ".500 / 1.528" },
  { label: "Preseason AVG / OPS", value: ".412 / 1.299" },
];

const AthleticProfile = () => (
  <section id="athletic-profile" className="w-full max-w-5xl mx-auto py-20 px-4 animate-fadeIn">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-4 text-center">Athletic Profile</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white border-2 border-bruin-gold rounded-xl shadow-card p-4 flex flex-col items-center">
          <div className="text-bruin-navy font-heading font-bold text-lg">{stat.value}</div>
          <div className="text-bruin-gold font-body text-xs uppercase tracking-wide mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
    <YouTubeFeed />
    <div className="flex flex-col gap-4 items-center md:items-start mt-8">
      <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-white hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
        <a href="/assets/SA/FDSA/Makaila%20Victoria%20Schneider.docx.pdf" target="_blank" rel="noopener noreferrer">Download Full Stats</a>
      </Button>
      <Button asChild className="bg-white text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-bruin-gold hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
        <a href="#videos">Watch More Highlights</a>
      </Button>
    </div>
  </section>
);

export default AthleticProfile; 