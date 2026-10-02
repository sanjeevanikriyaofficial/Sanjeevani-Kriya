import React, { useEffect, useRef, useState } from 'react';

export const SanjeevaniTheAntidote: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trajectorySteps = [
    {
      step: '01',
      word: 'UNDERSTAND',
      desc: 'The internal mechanism',
    },
    {
      step: '02',
      word: 'OBSERVE',
      desc: 'Active recurring patterns',
    },
    {
      step: '03',
      word: 'PRACTICE',
      desc: 'Systemic recalibration',
    },
    {
      step: '04',
      word: 'EXPERIENCE',
      desc: 'Conscious transformation',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="the-antidote-core"
      className="relative bg-indiangreen text-ivory py-12 sm:py-16 md:py-20 border-t border-softgold/25 overflow-hidden select-none"
    >
      {/* Background Ambience: MH2 Green Aesthetic with Subtle Organic Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-softgold/10 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-softgold/15 pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-[450px] h-[450px] rounded-full border border-softgold/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-indiangreen-light/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* COMPACT TWO-COLUMN EDITORIAL COMPOSITION (items-stretch ensures matching heights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Narrative & Core Philosophy                       */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            
            {/* Upper text content */}
            <div className="space-y-4">
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="w-5 h-[1.5px] bg-saffron" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-softgold font-semibold">
                  THE CORE PRACTICE
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className={`font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-ivory tracking-tight transition-all duration-700 delay-100 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                SANJEEVANI —<br />
                <span className="text-ivory">THE ANTIDOTE.</span>
              </h2>

              {/* Gold / Accent Line */}
              <div
                className={`font-serif-editorial text-lg sm:text-xl lg:text-2xl italic font-light text-softgold leading-snug transition-all duration-700 delay-200 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                RESET THE SYSTEM. EXPERIENCE LIFE DIFFERENTLY.
              </div>

              {/* Short Introduction */}
              <p
                className={`text-sm sm:text-base font-light text-ivory/85 leading-relaxed transition-all duration-700 delay-300 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                A yogic science–based experiential approach to understanding the human system — body, mind, emotions and life energies — as an interconnected whole.
              </p>
            </div>

            {/* Core Concept Box (ends in exact same horizontal line as right box) */}
            <div
              className={`p-5 sm:p-6 bg-indiangreen-deep/75 backdrop-blur-sm border border-softgold/25 relative transition-all duration-700 delay-400 ease-out flex flex-col justify-between ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-softgold to-transparent" />
              
              <div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-saffron font-semibold mb-2">
                  WHAT ARE WE REALLY TRYING TO RESET?
                </div>
                
                <p className="text-xs sm:text-sm font-light text-ivory/90 leading-relaxed mb-3">
                  <span className="italic text-softgold font-serif-editorial text-sm sm:text-base">Not the world outside.</span><br />
                  The process begins by understanding what happens within:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 border-y border-softgold/15 mb-3">
                  {['BODY', 'MIND', 'EMOTIONS', 'LIFE ENERGIES'].map((item) => (
                    <div
                      key={item}
                      className="text-center py-1.5 px-2 bg-indiangreen-surface/60 border border-softgold/20 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-ivory/90 font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs font-light text-ivory/80 leading-relaxed">
                When these dimensions are understood as part of one interconnected human system, the possibility is to observe patterns more consciously, work with them through practice and explore a different way of experiencing life.
              </p>
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: The Experiential Trajectory & Closing Statement   */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            
            {/* Trajectory Card Box */}
            <div
              className={`p-5 sm:p-6 bg-indiangreen-deep/75 backdrop-blur-sm border border-softgold/25 relative transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-softgold to-transparent" />
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-softgold font-semibold">
                  THE EXPERIENTIAL TRAJECTORY
                </span>
              </div>

              {/* 4 Steps in a balanced 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {trajectorySteps.map((item, idx) => (
                  <div
                    key={item.step}
                    className="p-3.5 bg-indiangreen-surface/60 border border-softgold/15 flex flex-col justify-between hover:border-softgold/35 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-saffron font-semibold">
                        {item.step}
                      </span>
                      {idx < trajectorySteps.length - 1 && (
                        <span className="text-softgold/40 text-xs">→</span>
                      )}
                    </div>
                    <div className="font-serif-editorial text-base sm:text-lg text-ivory font-normal tracking-wide mb-1">
                      {item.word}
                    </div>
                    <span className="text-[11px] font-light text-ivory/75 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Quote & Contemporary Context Box (flex-1 ensures ending on exact same line as left box) */}
            <div
              className={`p-5 sm:p-6 bg-indiangreen-deep/75 backdrop-blur-sm border border-softgold/25 relative transition-all duration-700 delay-400 ease-out lg:flex-1 flex flex-col justify-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-softgold to-transparent" />

              <div className="border-l-2 border-softgold pl-4 sm:pl-5 space-y-2.5">
                <p className="font-serif-editorial text-base sm:text-lg text-ivory/95 italic leading-relaxed">
                  "The Antidote is not simply information to learn. It is an experiential process — designed to move understanding from an idea into practice and direct experience."
                </p>
                <div className="w-8 h-[1px] bg-softgold/30" />
                <p className="text-xs font-light text-ivory/75 leading-relaxed">
                  A contemporary expression of yogic science, approached through understanding, practice and experience.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SanjeevaniTheAntidote;
