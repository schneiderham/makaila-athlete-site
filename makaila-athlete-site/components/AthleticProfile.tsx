import { Button } from "./ui/button";

const stats = [
  { label: "Position", value: "Utility" },
  { label: "Height", value: "5'7\"" },
  { label: "Weight", value: "135 lbs" },
  { label: "GPA", value: "3.8" },
  { label: "Graduation Year", value: "2025" },
  { label: "Batting Avg.", value: ".412" },
  { label: "OBP", value: ".489" },
  { label: "SB", value: "18" },
];

const AthleticProfile = () => (
  <section id="athletic-profile" className="max-w-3xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-bruin-navy text-center">Athletic Profile</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white border-2 border-bruin-gold rounded-xl shadow p-4 flex flex-col items-center">
          <div className="text-bruin-navy font-heading font-bold text-lg">{stat.value}</div>
          <div className="text-bruin-gold font-body text-xs uppercase tracking-wide mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow hover:bg-bruin-navy hover:text-bruin-gold border-2 border-bruin-navy transition">
        <a href="/assets/SA FDSA/Makaila Victoria Schneider.docx.pdf" target="_blank" rel="noopener noreferrer">Download Full Stats</a>
      </Button>
    </div>
  </section>
);

export default AthleticProfile; 