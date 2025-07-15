import Hero from "../components/Hero";
import About from "../components/About";
import AthleticProfile from "../components/AthleticProfile";
import AwardsCerts from "../components/AwardsCerts";
import Testimonials from "../components/Testimonials";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
// import other sections as needed

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AthleticProfile />
      <AwardsCerts />
      <Testimonials />
      <Resume />
      <Contact />
      {/* TODO: Add Resume, Contact, etc. */}
    </>
  );
}
