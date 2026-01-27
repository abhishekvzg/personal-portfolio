const HeroSection = () => {
  return (
    <section className="px-5 md:px-20 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground/60 mb-4">
          Product Manager
        </p>
        <h1 className="text-6xl md:text-[100px] lg:text-[140px] font-black uppercase leading-[0.85] tracking-[-0.03em] mb-8">
          ABHISHEK
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 max-w-3xl font-serif">
          I build products that users love and businesses need. With expertise in 
          <span className="text-foreground font-medium"> UX strategy</span>, 
          <span className="text-foreground font-medium"> data-driven decisions</span>, and 
          <span className="text-foreground font-medium"> cross-functional leadership</span>, 
          I turn complex problems into elegant solutions.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-3">
          {["User Research", "Roadmapping", "A/B Testing", "Agile", "SQL", "Figma"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-foreground/10 rounded-full text-sm font-bold uppercase tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
