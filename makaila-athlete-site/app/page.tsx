import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black text-center">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-200 dark:border-gray-700 bg-gray-200">
          {/* Replace with Makaila's photo */}
          <Image src="/next.svg" alt="Makaila Schneider" fill className="object-cover" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">Makaila Schneider</h1>
        <p className="text-lg sm:text-2xl mb-4">Collegiate Softball Player | SLCC Bruins #17 | Infielder</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#videos" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Watch Highlights</a>
          <a href="#contact" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition dark:bg-gray-900 dark:text-blue-300">Contact</a>
        </div>
      </section>

      {/* About/Bio Section */}
      <section id="about" className="w-full max-w-3xl mx-auto py-16 px-4" >
        <h2 className="text-2xl font-bold mb-4">About Makaila</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          {/* Replace with bio from personal statement */}
          <p>Makaila Schneider is a passionate student-athlete committed to excelling both on the field and in the classroom. (Full bio here...)</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-bold text-lg">5'3"</div>
            <div className="text-xs text-gray-500">Height</div>
          </div>
          <div>
            <div className="font-bold text-lg">INF</div>
            <div className="text-xs text-gray-500">Position(s)</div>
          </div>
          <div>
            <div className="font-bold text-lg">SLCC Bruins</div>
            <div className="text-xs text-gray-500">Team</div>
          </div>
          <div>
            <div className="font-bold text-lg">Class of 2024</div>
            <div className="text-xs text-gray-500">Academic</div>
          </div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section id="stats" className="w-full max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Stats & Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">.300</div>
            <div className="text-xs text-gray-500">Batting Avg</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-xs text-gray-500">Home Runs</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">33</div>
            <div className="text-xs text-gray-500">RBIs</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">.395</div>
            <div className="text-xs text-gray-500">OBP</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">5/5</div>
            <div className="text-xs text-gray-500">Stolen Bases</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-xs text-gray-500">Doubles</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">.620</div>
            <div className="text-xs text-gray-500">Slugging %</div>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">41</div>
            <div className="text-xs text-gray-500">Games Played</div>
          </div>
        </div>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <ul>
            <li>Youth/Travel: White Rock Renegades, Canadian U17 Nationals Bronze, USSSA All-American selection</li>
            <li>SLCC Bruins: 2025 Freshman Season, Region 18 Tournament runner-up</li>
            <li>Academic: Honor Roll every semester, aspiring NJCAA Academic All-Region</li>
          </ul>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="w-full max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Replace src with Makaila's actual YouTube video links */}
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe className="w-full h-60 rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID1" title="Makaila Recruiting Video" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe className="w-full h-60 rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID2" title="SLCC Game Highlights" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Gallery Section (Optional) */}
      <section id="gallery" className="w-full max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Replace with action shots */}
          <div className="bg-gray-200 dark:bg-gray-800 h-32 rounded-lg"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-32 rounded-lg"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-32 rounded-lg"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-32 rounded-lg"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col gap-4 mb-8">
          <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          <textarea placeholder="Message" className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Send</button>
        </form>
        <div className="prose prose-blue dark:prose-invert max-w-none">
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
