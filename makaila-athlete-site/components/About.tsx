import { Badge } from "./ui/badge";

const About = () => (
  <section id="about" className="max-w-3xl mx-auto py-20 px-4 text-center">
    <Badge className="bg-bruin-gold text-bruin-navy text-base font-bold px-4 py-2 mb-6">Proud SLCC Bruins Student-Athlete</Badge>
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-bruin-navy">About Makaila</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-6 rounded-full" />
    <p className="text-lg sm:text-xl mb-6 font-body text-bruin-navy">
      <strong>Hometown:</strong> Chilliwack, BC, Canada<br/>
      <strong>Academic Focus:</strong> Health & Fitness, Sports Science<br/>
      <strong>SLCC Bruins:</strong> Utility Player, #17, Salt Lake Community College
    </p>
    <div className="prose prose-lg mx-auto text-left text-bruin-navy font-body">
      <p>
        Makaila Schneider is a dedicated student-athlete at Salt Lake Community College (SLCC), one of the nation’s top and most respected JUCO softball programs. Growing up in Chilliwack, BC, Makaila developed a passion for softball and a commitment to excellence both on and off the field. Her journey has been defined by hard work, leadership, and a drive to succeed academically and athletically.
      </p>
      <p>
        At SLCC, Makaila balances a rigorous academic schedule with the demands of collegiate athletics, pursuing studies in health and fitness while competing at the highest level of JUCO softball. She is known for her versatility as a utility player, her leadership in the dugout, and her relentless work ethic. Makaila’s academic achievements and community involvement reflect her belief in the importance of being a well-rounded student-athlete.
      </p>
      <p>
        Makaila is proud to represent the SLCC Bruins and is committed to making an impact both on the field and in the classroom. Her goal is to continue her academic and athletic career at a four-year university, bringing her skills, determination, and positive attitude to the next level.
      </p>
    </div>
  </section>
);

export default About; 