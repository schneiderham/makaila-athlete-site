const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-bruin-navy text-center">Contact</h2>
      
      {/* Primary Contact - Makaila */}
      <div className="text-center mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-bruin-navy mb-4">
            Makaila Schneider
          </h3>
          <div className="text-lg sm:text-xl font-body text-bruin-navy">
            <a href="mailto:makailaschneider2024@gmail.com" className="text-bruin-gold hover:text-bruin-navy font-bold underline">
              makailaschneider2024@gmail.com
            </a>
            <span className="mx-4 text-gray-400">|</span>
            <a href="tel:+16047998550" className="text-bruin-gold hover:text-bruin-navy font-bold underline">
              604-799-8550
            </a>
          </div>
        </div>
      </div>

      {/* Secondary Contact - Coach Reference */}
      <div className="text-center">
        <h3 className="text-xl font-heading font-bold text-bruin-navy mb-4">Coach Reference</h3>
        <div className="bg-gradient-to-r from-bruin-gold to-yellow-300 text-bruin-navy border-2 border-bruin-navy rounded-2xl p-5 md:p-6 shadow-xl max-w-2xl mx-auto">
          <div className="font-heading font-bold text-lg">Cyndee Bennett – Head Softball Coach, Salt Lake CC</div>
          <div className="font-body mt-2">
            <a className="text-bruin-navy font-bold underline" href="mailto:cyndee.bennett@slcc.edu">cyndee.bennett@slcc.edu</a>
            <span className="mx-2">|</span>
            <a className="text-bruin-navy font-bold underline" href="tel:+18019574745">801-957-4745</a>
          </div>
          <div className="text-sm text-bruin-navy/80 mt-2">Coach Bennett can speak to Makaila's role, work ethic, and growth.</div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 