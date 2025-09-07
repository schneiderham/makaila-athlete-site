import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaTrophy, FaCertificate, FaMedal, FaStar } from "react-icons/fa";

const honors = [
  { title: "Region 18 Tournament Impact (SLCC)", year: "2025", type: "Athletic", description: "HR and double in tournament opener; Walk off HR and 3 RBIs vs Snow College." },
  { title: "Canadian U19 Nationals – Gold (Fusion 2006)", year: "2025", type: "Athletic", description: "Key contributor at 2B/3B; fielded 1.000 across provincials and nationals." },
  { title: "Regular Season OPS 1.015 (SLCC)", year: "2025", type: "Athletic", description: ".300 AVG with 8 HR, 33 RBI, 16 XBH, 5–5 SB." },
  { title: "Canadian U17 Nationals – Bronze (White Rock Renegades '06)", year: "2022", type: "Athletic", description: "Led offense with 3 hits in key nationals game." },
  { title: "4-Year Honor Roll (Yale Secondary)", year: "2024", type: "Academic", description: "Consistent academic excellence throughout high school." },
];

const certs = [
  { title: "Bronze Cross Lifeguard", year: "2023", type: "Certification" },
  { title: "Standard First Aid / CPR", year: "2023", type: "Certification" },
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