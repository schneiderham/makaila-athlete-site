import { Button } from "./ui/button";
import { FaDownload } from "react-icons/fa";

const resumeSections = [
  {
    title: "Education",
    items: [
      "Salt Lake Community College (SLCC), A.A. in Health & Fitness (in progress)",
      "Yale Secondary, Chilliwack, BC — Honor Roll Graduate"
    ]
  },
  {
    title: "Athletic Career",
    items: [
      "SLCC Bruins Softball, Utility Player, #17 (2023–present)",
      "White Rock Renegades, Canadian U17 Nationals Bronze Medalist",
      "USSSA All-American Selection"
    ]
  },
  {
    title: "Work Experience",
    items: [
      "Lifeguard & Swim Instructor, Chilliwack Leisure Centre (2022–2023)",
      "Softball Camp Volunteer Coach, Chilliwack Minor Softball"
    ]
  },
  {
    title: "Skills",
    items: [
      "Versatile infielder/outfielder",
      "Leadership & teamwork",
      "Time management",
      "First Aid & Lifeguard Certified"
    ]
  }
];

const Resume = () => (
  <section id="resume" className="max-w-3xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-bruin-navy text-center">Resume</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="flex justify-center mb-8">
      <Button asChild className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow hover:bg-bruin-navy hover:text-bruin-gold border-2 border-bruin-navy transition flex items-center gap-2">
        <a href="/assets/SA FDSA/Makaila Victoria Schneider.docx.pdf" target="_blank" rel="noopener noreferrer">
          <FaDownload className="inline-block mr-2" /> Download PDF Resume
        </a>
      </Button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {resumeSections.map(section => (
        <div key={section.title} className="bg-white border-2 border-bruin-gold rounded-xl shadow-md p-6">
          <h3 className="text-xl font-heading font-bold text-bruin-navy mb-2">{section.title}</h3>
          <ul className="list-disc list-inside text-bruin-navy font-body">
            {section.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Resume; 