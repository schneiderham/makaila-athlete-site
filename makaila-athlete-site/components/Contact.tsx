import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="max-w-xl mx-auto py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-bruin-navy text-center">Contact</h2>
      <form
        className="bg-white border-2 border-bruin-gold rounded-xl shadow-lg p-8 flex flex-col gap-6"
        onSubmit={e => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Input type="text" name="name" placeholder="Your Name" required className="bg-white border-bruin-navy text-bruin-navy font-body" />
        <Input type="email" name="email" placeholder="Your Email" required className="bg-white border-bruin-navy text-bruin-navy font-body" />
        <textarea name="message" placeholder="Message" required rows={5} className="bg-white border-2 border-bruin-navy rounded-lg p-3 text-bruin-navy font-body" />
        <Button type="submit" className="bg-bruin-gold text-bruin-navy font-bold px-8 py-3 rounded-full shadow hover:bg-bruin-navy hover:text-bruin-gold border-2 border-bruin-navy transition flex items-center gap-2">
          <FaPaperPlane className="inline-block mr-2" /> Send Message
        </Button>
      </form>
      {submitted && (
        <div className="mt-6 text-center text-bruin-gold font-heading font-bold">Thank you! Your message has been sent.</div>
      )}
      <div className="text-center text-bruin-navy mt-8">
        <p className="font-semibold font-body">For recruiting inquiries, please use the form above or email:</p>
        <a href="mailto:makailaschneider@email.com" className="text-bruin-gold font-bold underline">makailaschneider@email.com</a>
      </div>
    </section>
  );
};

export default Contact; 