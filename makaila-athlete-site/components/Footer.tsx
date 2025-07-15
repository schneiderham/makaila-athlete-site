import Image from "next/image";

const Footer = () => (
  <footer className="w-full py-8 bg-bruin-navy text-white flex flex-col items-center border-t-4 border-bruin-gold mt-12">
    <div className="flex items-center gap-3 mb-2">
      <Image src="/assets/bruin-bear.webp" alt="SLCC Bruins Logo" width={32} height={32} className="bg-white rounded-full border-2 border-bruin-gold" />
      <span className="font-heading font-bold text-bruin-gold text-lg">SLCC Bruins</span>
    </div>
    <div className="flex space-x-6 mb-2">
      <a href="https://twitter.com/SoftballMakaila" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-bruin-gold">Twitter</a>
      <a href="https://instagram.com/makailasoftball24" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-bruin-gold">Instagram</a>
      <a href="#" className="hover:underline font-bold text-bruin-gold">SportsRecruits</a>
      <a href="#" className="hover:underline font-bold text-bruin-gold">SLCC Bruins Profile</a>
    </div>
    <div className="text-xs text-bruin-gold">&copy; {new Date().getFullYear()} Makaila Schneider. All rights reserved.</div>
  </footer>
);

export default Footer; 