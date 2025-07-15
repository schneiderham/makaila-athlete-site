import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center py-16 sm:py-24 bg-gradient-to-b from-[#0033A0] via-[#0055D4] to-[#FFC72C] dark:from-gray-900 dark:to-black text-center relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300 via-blue-200 to-transparent"></div>
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FFC72C] shadow-xl backdrop-blur-md bg-white/60 dark:bg-black/60 flex items-center justify-center">
          {/* Replace with Makaila's photo or a better placeholder */}
          <Image src="/vercel.svg" alt="Makaila Schneider" fill className="object-cover" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-white drop-shadow-lg">Makaila Schneider</h1>
        <p className="text-lg sm:text-2xl mb-4 text-yellow-200 font-semibold drop-shadow">Collegiate Softball Player | SLCC Bruins #17 | Infielder</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#videos" className="bg-[#0033A0] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#0055D4] transition text-lg border-2 border-[#FFC72C]">Watch Highlights</a>
          <a href="#contact" className="bg-[#FFC72C] text-[#0033A0] border-2 border-[#0033A0] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition text-lg">Contact</a>
        </div>
      </section>

      {/* About/Bio Section */}
      <section id="about" className="w-full max-w-3xl mx-auto py-16 px-4 animate-fade-in-up delay-100">
        <h2 className="text-2xl font-bold mb-4 text-[#0033A0] dark:text-[#FFC72C]">About Makaila</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none bg-white/80 dark:bg-black/60 rounded-xl p-6 shadow-lg">
          <p>Hello Coaches – My name is Makaila Schneider and I am a passionate student-athlete committed to excelling both on the field and in the classroom. I grew up in Chilliwack, BC, where I fell in love with the game of softball and learned the value of hard work early on. As a freshman infielder at Salt Lake Community College, I’ve had the opportunity to compete at a high level and contribute to my team’s success. This past season I worked hard to earn a starting spot, ultimately hitting above .300 and driving in runs in key moments for the Bruins. I take pride in my versatility – having played middle infield and third base, and even outfield when needed – and I embrace every chance to improve my game. Coaches and teammates know me as a very coachable, hard-working, and competitive player who loves to learn and elevate those around me.
Off the field, I carry the same competitive drive into my academics. I was an honors student in high school and continue to prioritize my studies in college. Balancing a rigorous academic load with collegiate athletics has taught me excellent time management and perseverance. I am interested in pursuing studies in health and fitness, as I believe in training smart and constantly pushing my limits physically and mentally. My goal is to transfer to a four-year university after JUCO and make an immediate impact there as well, both as a player and a leader. I am fully committed to doing what it takes – whether it’s extra reps in the batting cage, additional workouts, or hours in the library – to succeed at the next level. I love this sport and every challenge that comes with it. Thank you for taking the time to learn about me, and I hope to bring my determination, skills, and positive attitude to your program in the future.</p>
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
    </div>
  );
}
