import { Card, CardContent, CardHeader } from "./ui/card";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Makaila is a dedicated, hard-working, and positive leader who inspires those around her. She is respected by her peers and coaches alike.",
    name: "Coach Danielle Ashworth",
    role: "SLCC Bruins Softball Coach"
  },
  {
    quote: "Her work ethic and character are second to none. Makaila is a true role model for younger athletes.",
    name: "Coach Guthrie",
    role: "Travel Ball Coach"
  },
  {
    quote: "Makaila’s leadership and commitment to excellence set her apart. She is always willing to go the extra mile for her team.",
    name: "Jack Hopwood",
    role: "Teammate"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="w-full max-w-5xl mx-auto py-20 px-4 animate-fadeIn">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-4 text-center">Testimonials</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <Card key={i} className="bg-white border-2 border-bruin-gold shadow-card flex flex-col justify-between h-full p-6 hover:shadow-lg transition-shadow">
          <CardHeader>
            <FaQuoteLeft className="text-bruin-gold text-2xl mb-2" />
            <div className="italic text-bruin-navy mb-4 font-body">“{t.quote}”</div>
          </CardHeader>
          <CardContent>
            <div className="font-heading font-bold text-bruin-navy text-sm mb-1">— {t.name}</div>
            <div className="text-bruin-gold text-xs font-semibold font-body">{t.role}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Testimonials; 