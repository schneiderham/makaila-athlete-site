import { Button } from "./ui/button";
import YouTubeFeed from "./YouTubeFeed";

const stats = [
  { label: "Position", value: "Infielder" },
  { label: "Height", value: "5'7\"" },
  { label: "Weight", value: "135 lbs" },
  { label: "Throws/Bats", value: "Right/Right" },
  { label: "GPA", value: "3.8" },
  { label: "Graduation Year", value: "2025" },
  { label: "Batting Avg.", value: ".412" },
  { label: "OBP", value: ".489" },
  { label: "SB", value: "18" },
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
        <a href="/assets/SA FDSA/Makaila Victoria Schneider.docx.pdf" target="_blank" rel="noopener noreferrer">Download Full Stats</a>
      </Button>
      <Button asChild className="bg-white text-bruin-navy font-bold px-8 py-3 rounded-full shadow-card hover:bg-bruin-gold hover:text-bruin-navy border-2 border-bruin-gold transition-all text-lg">
        <a href="#videos">Watch More Highlights</a>
      </Button>
    </div>
  </section>
);

export default AthleticProfile; 