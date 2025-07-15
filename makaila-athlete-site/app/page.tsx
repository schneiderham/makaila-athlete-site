import Image from "next/image";
import BruinBear from "../public/assets/bruin-bear.png";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Navbar (add bear logo) */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-black/80 shadow-md border-b border-[#0033A0]">
        <div className="flex items-center gap-3">
          <Image src="/assets/bruin-bear.webp" alt="SLCC Bruins Bear Logo" width={40} height={40} className="rounded-full bg-white border-2 border-[#0033A0]" />
          <span className="font-bold text-[#0033A0] dark:text-[#FFC72C] text-xl">Makaila Schneider</span>
        </div>
        {/* ...existing nav links... */}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center py-16 sm:py-24 bg-gradient-to-b from-[#0033A0] via-[#0055D4] to-[#FFC72C] dark:from-gray-900 dark:to-black text-center relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300 via-blue-200 to-transparent"></div>
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FFC72C] shadow-xl backdrop-blur-md bg-white/60 dark:bg-black/60 flex items-center justify-center">
          <Image src="/assets/makaila-headshot.webp" alt="Makaila Schneider Headshot" fill className="object-cover" />
        </div>
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-[#0033A0] text-[#FFC72C] px-4 py-2 rounded-full font-bold shadow-md border-2 border-[#FFC72C] text-sm uppercase tracking-wide">SLCC Bruins | Top JUCO Program</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-white drop-shadow-lg">Makaila Schneider</h1>
        <p className="text-lg sm:text-2xl mb-4 text-yellow-200 font-semibold drop-shadow">Scholar. Leader. Athlete.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <span className="inline-block bg-[#FFC72C] text-[#0033A0] px-4 py-2 rounded-full font-bold shadow-md border-2 border-[#0033A0] text-sm uppercase tracking-wide">Well-Rounded Student & Citizen</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#videos" className="bg-[#0033A0] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#0055D4] transition text-lg border-2 border-[#FFC72C]">Watch Highlights</a>
          <a href="#contact" className="bg-[#FFC72C] text-[#0033A0] border-2 border-[#0033A0] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition text-lg">Contact</a>
        </div>
      </section>

      {/* About/Bio Section */}
      <section id="about" className="w-full max-w-3xl mx-auto py-16 px-4 animate-fade-in-up delay-100">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">About Makaila</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none bg-white/80 dark:bg-black/60 rounded-xl p-6 shadow-lg">
          <p>Hello Coaches – My name is Makaila Schneider and I am a passionate student-athlete committed to excelling both on the field and in the classroom. I grew up in Chilliwack, BC, where I fell in love with the game of softball and learned the value of hard work early on. As a freshman infielder at Salt Lake Community College, I’ve had the opportunity to compete at a high level and contribute to my team’s success. This past season I worked hard to earn a starting spot, ultimately hitting above .300 and driving in runs in key moments for the Bruins. I take pride in my versatility – having played middle infield and third base, and even outfield when needed – and I embrace every chance to improve my game. Coaches and teammates know me as a very coachable, hard-working, and competitive player who loves to learn and elevate those around me.</p>
          <p>Playing for Salt Lake Community College (SLCC) Bruins, one of the nation’s top and most respected JUCO softball programs, is a tremendous honor and testament to Makaila’s skill and work ethic.</p>
          <p>Off the field, I carry the same competitive drive into my academics and community. I was an honors student in high school and continue to prioritize my studies in college. Balancing a rigorous academic load with collegiate athletics has taught me excellent time management and perseverance. I am interested in pursuing studies in health and fitness, as I believe in training smart and constantly pushing my limits physically and mentally. My goal is to transfer to a four-year university after JUCO and make an immediate impact there as well, both as a player and a leader. I am fully committed to doing what it takes – whether it’s extra reps in the batting cage, additional workouts, or hours in the library – to succeed at the next level. I love this sport and every challenge that comes with it.</p>
          <p className="font-bold text-[#0033A0] dark:text-[#FFC72C]">2024 Frank Demaris Citizenship Award recipient – recognized for outstanding leadership, character, and community service.</p>
          <p>Beyond athletics and academics, I am dedicated to giving back. My recent fundraising for BC Children’s Hospital (24KM in 24 hours) and my volunteer work have shaped me into a well-rounded, respected leader among my peers. Thank you for taking the time to learn about me, and I hope to bring my determination, skills, and positive attitude to your program in the future.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-[#0033A0] text-white rounded-lg p-4 shadow-md">
            <div className="font-bold text-lg">5'3"</div>
            <div className="text-xs text-yellow-200">Height</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg p-4 shadow-md">
            <div className="font-bold text-lg">INF</div>
            <div className="text-xs text-blue-900">Position(s)</div>
          </div>
          <div className="bg-[#0033A0] text-white rounded-lg p-4 shadow-md">
            <div className="font-bold text-lg">SLCC Bruins</div>
            <div className="text-xs text-yellow-200">Team</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg p-4 shadow-md">
            <div className="font-bold text-lg">Class of 2024</div>
            <div className="text-xs text-blue-900">Academic</div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section id="awards" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-150">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Awards & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Frank Demaris Citizenship Award - special highlight */}
          <div className="bg-gradient-to-br from-[#FFC72C] to-[#0033A0] text-white rounded-xl shadow-lg p-6 flex flex-col items-center border-4 border-[#FFC72C]">
            <Image src="/assets/SA FDSA/Frank Demaris Volunteer Spirit Award.pdf" alt="Frank Demaris Citizenship Award" width={120} height={120} className="rounded-full mb-4 border-4 border-white shadow" />
            <div className="font-bold text-lg mb-2">Frank Demaris Citizenship Award</div>
            <div className="text-sm mb-2">2024</div>
            <div className="text-xs mb-2 text-yellow-200">For outstanding leadership, character, and community service</div>
            <a href="/assets/SA FDSA/Frank Demaris Volunteer Spirit Award.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-white text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Frank Demaris Volunteer Spirit Award Certificate</a>
          </div>
          {/* Other awards */}
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <Image src="/assets/Awards/leadershipaward.jpg" alt="Leadership Award" width={120} height={120} className="rounded-full mb-4 border-4 border-[#FFC72C] shadow" />
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">Leadership Award</div>
            <a href="/assets/Awards/leadershipaward.jpg" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Award</a>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/Awards/grade10honour.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Grade 10 Honour Roll Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">Grade 10 Honour Roll</div>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/Awards/grade9honour.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Grade 9 Honour Roll Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">Grade 9 Honour Roll</div>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/Awards/Makaila Schneider 4 Year Honor Roll All of High School Award.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View 4 Year Honor Roll Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">4 Year Honor Roll</div>
          </div>
        </div>
      </section>

      {/* Community & Volunteering Section */}
      <section id="community" className="w-full max-w-3xl mx-auto py-16 px-4 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Community & Volunteering</h2>
        <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 border-2 border-[#0033A0]">
          <Image src="/assets/Childrens 24KM donation/Childrens Hospital Fundraised Cheque Photo 24km in 24 hours.jpg" alt="24KM Fundraiser Cheque" width={200} height={200} className="rounded-xl border-4 border-[#FFC72C] shadow" />
          <div>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">24KM in 24 Hours for BC Children’s Hospital</div>
            <p className="mb-2">Makaila completed a 24KM run in 24 hours to raise funds for BC Children’s Hospital, demonstrating her commitment to giving back and supporting her community.</p>
            <a href="/assets/Childrens 24KM donation/Makaila_s 24Km in 24hrs for BC Children_s Hospital.docx" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">Read Story</a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-250">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <Image src="/assets/lifeguarding/NL pic.jpg" alt="National Lifeguard" width={120} height={120} className="rounded-full mb-4 border-4 border-[#FFC72C] shadow object-cover" />
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">National Lifeguard</div>
            <a href="/assets/lifeguarding/Certificate5174515 (1).pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Certificate</a>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/lifeguarding/FirstAid Makaila_Schneider_103068455_wallet.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View First Aid (Wallet) Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">First Aid (Wallet)</div>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/lifeguarding/FirstAid Makaila_Schneider_103068455_wall.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View First Aid (Wall) Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">First Aid (Wall)</div>
          </div>
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#0033A0]">
            <a href="/assets/lifeguarding/Bronze Cross Certificate5174515.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Bronze Cross Certificate</a>
            <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">Bronze Cross</div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-300">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Academics</h2>
        <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 mb-8 border-2 border-[#0033A0]">
          <div className="font-bold text-lg mb-2 text-[#0033A0] dark:text-[#FFC72C]">Academic Honors</div>
          <ul className="list-disc ml-6 mb-4">
            <li>Honor Roll every semester of high school</li>
            <li>4 Year Honor Roll All of High School</li>
            <li>Grade 9 & 10 Honour Roll</li>
          </ul>
          <div className="font-bold text-md mb-2 text-[#0033A0] dark:text-[#FFC72C]">Report Cards</div>
          <div className="flex flex-wrap gap-4">
            <a href="/assets/Maks Report cards/Gr9_Report_Cards_-_Middle_Years_and_Secondary.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">Grade 9 Report Card</a>
            <a href="/assets/Maks Report cards/Gr10_Report_Cards_-_Middle_Years_and_Secondary (1).pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">Grade 10 Report Card</a>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-350">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">References</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 border-2 border-[#0033A0] flex flex-col justify-between">
            <div className="italic mb-4 text-[#0033A0] dark:text-[#FFC72C]">“Makaila is a dedicated, hard-working, and positive leader who inspires those around her. She is respected by her peers and coaches alike.”</div>
            <div className="font-bold text-sm mb-2 text-[#0033A0] dark:text-[#FFC72C]">— Coach Danielle Ashworth</div>
            <a href="/assets/References/Letter of recommendation Danielle Ashworth .pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Letter</a>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 border-2 border-[#0033A0] flex flex-col justify-between">
            <div className="italic mb-4 text-[#0033A0] dark:text-[#FFC72C]">“Her work ethic and character are second to none. Makaila is a true role model for younger athletes.”</div>
            <div className="font-bold text-sm mb-2 text-[#0033A0] dark:text-[#FFC72C]">— Coach Guthrie</div>
            <a href="/assets/References/Letter of Recomendation SCHNEIDER Guthrie.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Letter</a>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-black/60 rounded-xl shadow-lg p-6 border-2 border-[#0033A0] flex flex-col justify-between">
            <div className="italic mb-4 text-[#0033A0] dark:text-[#FFC72C]">“Makaila’s leadership and commitment to excellence set her apart. She is always willing to go the extra mile for her team.”</div>
            <div className="font-bold text-sm mb-2 text-[#0033A0] dark:text-[#FFC72C]">— Jack Hopwood</div>
            <a href="/assets/References/Makaila Schneider_Reference letter Jack Hopwood.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FFC72C] text-[#0033A0] rounded-full font-bold shadow hover:bg-yellow-100 transition text-sm">View Letter</a>
          </div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section id="stats" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Stats & Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#0033A0] text-white rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">.300</div>
            <div className="text-xs text-yellow-200">Batting Avg</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">8</div>
            <div className="text-xs text-blue-900">Home Runs</div>
          </div>
          <div className="bg-[#0033A0] text-white rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">33</div>
            <div className="text-xs text-yellow-200">RBIs</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">.395</div>
            <div className="text-xs text-blue-900">OBP</div>
          </div>
          <div className="bg-[#0033A0] text-white rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">5/5</div>
            <div className="text-xs text-yellow-200">Stolen Bases</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">8</div>
            <div className="text-xs text-blue-900">Doubles</div>
          </div>
          <div className="bg-[#0033A0] text-white rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">.620</div>
            <div className="text-xs text-yellow-200">Slugging %</div>
          </div>
          <div className="bg-[#FFC72C] text-[#0033A0] rounded-lg shadow-md p-4">
            <div className="font-bold text-2xl">41</div>
            <div className="text-xs text-blue-900">Games Played</div>
          </div>
        </div>
        <div className="prose prose-blue dark:prose-invert max-w-none bg-white/80 dark:bg-black/60 rounded-xl p-6 shadow-lg">
          <ul>
            <li><span className="bg-[#0033A0] text-white px-2 py-1 rounded-full text-xs font-semibold">Youth/Travel</span> White Rock Renegades, Canadian U17 Nationals Bronze, USSSA All-American selection</li>
            <li><span className="bg-[#FFC72C] text-[#0033A0] px-2 py-1 rounded-full text-xs font-semibold">SLCC Bruins</span> 2025 Freshman Season, Region 18 Tournament runner-up</li>
            <li><span className="bg-[#0033A0] text-white px-2 py-1 rounded-full text-xs font-semibold">Academic</span> Honor Roll every semester, aspiring NJCAA Academic All-Region</li>
          </ul>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="w-full max-w-3xl mx-auto py-16 px-4 animate-fade-in-up delay-300">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Replace src with Makaila's actual YouTube video links */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-black/60 border-2 border-[#0033A0]">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe className="w-full h-60 rounded-t-lg" src="https://www.youtube.com/embed/VIDEO_ID1" title="Makaila Recruiting Video" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="p-2 text-center text-[#0033A0] dark:text-[#FFC72C] font-semibold">Recruiting Video</div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-black/60 border-2 border-[#FFC72C]">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe className="w-full h-60 rounded-t-lg" src="https://www.youtube.com/embed/VIDEO_ID2" title="SLCC Game Highlights" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="p-2 text-center text-[#0033A0] dark:text-[#FFC72C] font-semibold">SLCC Game Highlights</div>
          </div>
        </div>
      </section>

      {/* Gallery Section (Optional) */}
      <section id="gallery" className="w-full max-w-4xl mx-auto py-16 px-4 animate-fade-in-up delay-400">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Replace with action shots */}
          <div className="bg-[#0033A0] dark:bg-[#FFC72C] h-32 rounded-xl shadow-lg flex items-center justify-center text-white dark:text-[#0033A0] font-bold text-lg hover:scale-105 transition cursor-pointer">Photo 1</div>
          <div className="bg-[#FFC72C] dark:bg-[#0033A0] h-32 rounded-xl shadow-lg flex items-center justify-center text-[#0033A0] dark:text-[#FFC72C] font-bold text-lg hover:scale-105 transition cursor-pointer">Photo 2</div>
          <div className="bg-[#0033A0] dark:bg-[#FFC72C] h-32 rounded-xl shadow-lg flex items-center justify-center text-white dark:text-[#0033A0] font-bold text-lg hover:scale-105 transition cursor-pointer">Photo 3</div>
          <div className="bg-[#FFC72C] dark:bg-[#0033A0] h-32 rounded-xl shadow-lg flex items-center justify-center text-[#0033A0] dark:text-[#FFC72C] font-bold text-lg hover:scale-105 transition cursor-pointer">Photo 4</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto py-16 px-4 animate-fade-in-up delay-500">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">Contact</h2>
        <form className="flex flex-col gap-4 mb-8 bg-white/80 dark:bg-black/60 rounded-xl p-6 shadow-lg">
          <input type="text" placeholder="Name" className="p-3 rounded border-2 border-[#0033A0] dark:border-[#FFC72C] bg-white dark:bg-gray-900" />
          <input type="email" placeholder="Email" className="p-3 rounded border-2 border-[#0033A0] dark:border-[#FFC72C] bg-white dark:bg-gray-900" />
          <textarea placeholder="Message" className="p-3 rounded border-2 border-[#0033A0] dark:border-[#FFC72C] bg-white dark:bg-gray-900" rows={4}></textarea>
          <button type="submit" className="bg-[#0033A0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0055D4] transition border-2 border-[#FFC72C]">Send</button>
        </form>
        <div className="prose prose-blue dark:prose-invert max-w-none bg-white/80 dark:bg-black/60 rounded-xl p-6 shadow-lg">
          <p>For recruiting inquiries, contact:</p>
          <ul>
            <li><strong>SLCC Head Coach Cyndee Bennett</strong> – <a href="mailto:cyndee.bennett@slcc.edu">cyndee.bennett@slcc.edu</a>, 801-957-4745</li>
            <li><a href="https://twitter.com/SoftballMakaila" target="_blank" rel="noopener noreferrer">@SoftballMakaila on Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">SportsRecruits Profile</a></li>
          </ul>
        </div>
      </section>

      {/* Footer (add bear logo) */}
      <footer className="w-full py-6 flex flex-col items-center border-t border-[#0033A0] dark:border-[#FFC72C] mt-8 bg-white/80 dark:bg-black/60">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/assets/bruin-bear.webp" alt="SLCC Bruins Bear Logo" width={32} height={32} className="rounded-full bg-white border-2 border-[#0033A0]" />
          <span className="font-bold text-[#0033A0] dark:text-[#FFC72C]">SLCC Bruins</span>
        </div>
        <div className="flex space-x-6 mb-2">
          <a href="https://twitter.com/SoftballMakaila" target="_blank" rel="noopener noreferrer" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">Twitter</a>
          <a href="https://instagram.com/makailasoftball24" target="_blank" rel="noopener noreferrer" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">Instagram</a>
          <a href="#" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">SportsRecruits</a>
        </div>
        <div className="text-xs text-[#0033A0] dark:text-[#FFC72C]">&copy; {new Date().getFullYear()} Makaila Schneider. All rights reserved.</div>
      </footer>
    </div>
  );
}
