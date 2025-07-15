import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaTrophy, FaCertificate, FaMedal, FaStar } from "react-icons/fa";

const honors = [
  { title: "Frank Demaris Citizenship Award", year: "2024", type: "Leadership", description: "Outstanding leadership, character, and community service." },
  { title: "4 Year Honor Roll (High School)", year: "2023", type: "Academic", description: "Consistent academic excellence throughout high school." },
  { title: "Leadership Award", year: "2023", type: "Leadership", description: "Recognized for team leadership and positive influence." },
  { title: "Canadian U17 Nationals Bronze", year: "2022", type: "Athletic", description: "Bronze medalist at Canadian U17 Nationals." },
  { title: "USSSA All-American Selection", year: "2021", type: "Athletic", description: "Selected as USSSA All-American." },
];

const certs = [
  { title: "First Aid Certified", year: "2023", type: "Certification" },
  { title: "Bronze Cross Lifeguard", year: "2023", type: "Certification" },
];

const typeIcon = (type: string) => {
  switch (type) {
    case "Academic": return <FaStar className="text-bruin-gold text-xl mr-2" />;
    case "Leadership": return <FaTrophy className="text-bruin-gold text-xl mr-2" />;
    case "Athletic": return <FaMedal className="text-bruin-gold text-xl mr-2" />;
    case "Certification": return <FaCertificate className="text-bruin-gold text-xl mr-2" />;
    default: return <FaStar className="text-bruin-gold text-xl mr-2" />;
  }
};

const AwardsCerts = () => (
  <section id="awards" className="w-full max-w-5xl mx-auto py-20 px-4 animate-fadeIn">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-4 text-center">Honors & Awards</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {honors.map((item, i) => (
        <Card key={i} className="bg-white border-2 border-bruin-gold shadow-card hover:shadow-lg transition-shadow flex flex-col h-full">
          <CardHeader className="flex flex-row items-center gap-2 pb-0">
            {typeIcon(item.type)}
            <CardTitle className="text-bruin-navy text-lg font-heading font-bold mb-2 flex-1">{item.title}</CardTitle>
            <span className="bg-bruin-gold text-bruin-navy text-xs font-bold px-3 py-1 rounded-full ml-auto">{item.type}</span>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="text-bruin-navy text-sm font-body mb-2">{item.description}</div>
            <div className="text-bruin-gold text-xs font-semibold font-body mt-auto">{item.year}</div>
          </CardContent>
        </Card>
      ))}
      {certs.map((cert, i) => (
        <Card key={"cert-"+i} className="bg-white border-2 border-bruin-gold shadow-card hover:shadow-lg transition-shadow flex flex-col h-full">
          <CardHeader className="flex flex-row items-center gap-2 pb-0">
            {typeIcon(cert.type)}
            <CardTitle className="text-bruin-navy text-lg font-heading font-bold mb-2 flex-1">{cert.title}</CardTitle>
            <span className="bg-bruin-gold text-bruin-navy text-xs font-bold px-3 py-1 rounded-full ml-auto">{cert.type}</span>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="text-bruin-gold text-xs font-semibold font-body mt-auto">{cert.year}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default AwardsCerts; 