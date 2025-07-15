import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FaTrophy, FaCertificate, FaMedal, FaStar } from "react-icons/fa";

const awards = [
  { title: "Frank Demaris Citizenship Award", year: "2024", type: "Leadership" },
  { title: "4 Year Honor Roll (High School)", year: "2023", type: "Academic" },
  { title: "Leadership Award", year: "2023", type: "Leadership" },
  { title: "Canadian U17 Nationals Bronze", year: "2022", type: "Athletic" },
  { title: "USSSA All-American Selection", year: "2021", type: "Athletic" },
];

const certs = [
  { title: "First Aid Certified", year: "2023", type: "Certification" },
  { title: "Bronze Cross Lifeguard", year: "2023", type: "Certification" },
];

const badgeColor = (type: string) => {
  switch (type) {
    case "Academic": return "bg-bruin-gold text-bruin-navy";
    case "Leadership": return "bg-bruin-navy text-bruin-gold";
    case "Athletic": return "bg-white text-bruin-navy border-2 border-bruin-gold";
    case "Certification": return "bg-bruin-gold text-bruin-navy";
    default: return "bg-bruin-gold text-bruin-navy";
  }
};

const typeIcon = (type: string) => {
  switch (type) {
    case "Academic": return <FaStar className="text-bruin-gold mr-2" />;
    case "Leadership": return <FaTrophy className="text-bruin-gold mr-2" />;
    case "Athletic": return <FaMedal className="text-bruin-gold mr-2" />;
    case "Certification": return <FaCertificate className="text-bruin-gold mr-2" />;
    default: return <FaStar className="text-bruin-gold mr-2" />;
  }
};

const AwardsCerts = () => (
  <section id="awards-certs" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-bruin-navy text-center">Awards & Certifications</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {awards.map((award, i) => (
        <Card key={i} className="bg-white border-2 border-bruin-gold shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-2">
            {typeIcon(award.type)}
            <CardTitle className="text-bruin-navy text-lg font-heading font-bold mb-2">{award.title}</CardTitle>
            <Badge className={`${badgeColor(award.type)} text-xs font-bold px-3 py-1 mb-2 ml-auto`}>{award.type}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-bruin-navy text-sm font-body">{award.year}</div>
          </CardContent>
        </Card>
      ))}
      {certs.map((cert, i) => (
        <Card key={"cert-"+i} className="bg-white border-2 border-bruin-gold shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-2">
            {typeIcon(cert.type)}
            <CardTitle className="text-bruin-navy text-lg font-heading font-bold mb-2">{cert.title}</CardTitle>
            <Badge className={`${badgeColor(cert.type)} text-xs font-bold px-3 py-1 mb-2 ml-auto`}>{cert.type}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-bruin-navy text-sm font-body">{cert.year}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default AwardsCerts; 