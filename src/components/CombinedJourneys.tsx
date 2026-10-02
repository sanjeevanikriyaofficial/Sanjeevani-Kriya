import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CombinedJourneysProps {
  onJoinCourse?: (journeyName?: string) => void;
}

export const CombinedJourneys: React.FC<CombinedJourneysProps> = ({ onJoinCourse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="combined-journeys"
      className="relative bg-indiangreen text-ivory py-6 sm:py-8 md:py-10 border-t border-softgold/25 overflow-hidden select-none"
    >
      {/* Background Ambience: Subtle organic concentric geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-softgold/10 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-softgold/15 pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-[450px] h-[450px] rounded-full border border-softgold/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-indiangreen-light/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-5 h-[1.5px] bg-saffron" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-softgold font-semibold">
              THE COMBINED JOURNEYS
            </span>
          </div>
          <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] text-ivory tracking-tight mb-1.5 sm:mb-2">
            GO DEEPER, TOGETHER.
          </h2>
          <p className="text-xs sm:text-sm font-light text-ivory/75 leading-relaxed max-w-2xl">
            Two ways to experience the Sanjeevani journey — depending on how far you want to explore.
          </p>
        </div>

        {/* Two Compact Horizontal Option Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          
          {/* 01 — FOUNDATION + SYSTEM */}
          <div className="relative bg-indiangreen-deep/75 backdrop-blur-sm border border-softgold/25 p-4 sm:p-5 md:p-6 flex flex-col justify-between hover:border-softgold/50 transition-all duration-300">
            {/* Subtle corner accent line */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-softgold to-transparent" />

            <div className="flex-1 flex flex-col">
              {/* Header Row: Label & Number */}
              <div className="flex items-center justify-between pb-2.5 border-b border-softgold/15 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-softgold font-semibold">
                    01 — FOUNDATION + SYSTEM
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-softgold/30 bg-softgold/10 text-softgold font-medium">
                  2 COURSES
                </span>
              </div>

              {/* Course Titles */}
              <div className="space-y-1 mb-3">
                <div className="font-serif-editorial text-base sm:text-lg md:text-xl text-ivory leading-snug font-normal">
                  Asthi Sanchalan Sanjeevani
                </div>
                <div className="text-softgold/70 text-xs font-serif-editorial italic">
                  +
                </div>
                <div className="font-serif-editorial text-base sm:text-lg md:text-xl text-ivory leading-snug font-normal">
                  Sanjeevani — The Antidote
                </div>
              </div>

              {/* Progression Line: FOUNDATION -> SYSTEM */}
              <div className="my-2.5 py-1.5 px-3 bg-indiangreen-surface/60 border border-softgold/20">
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-softgold/90 mb-1">
                  <span>PATHWAY</span>
                </div>
                <div className="relative flex items-center gap-2 text-[10px] sm:text-xs tracking-wider text-ivory/80">
                  <span className="text-softgold font-medium">FOUNDATION</span>
                  <div className="flex-1 h-[1px] bg-softgold/20 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-saffron transition-transform duration-1000 ease-out origin-left ${
                        isVisible ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                  <span className="text-saffron font-medium">SYSTEM</span>
                </div>
              </div>

              {/* Small Description */}
              <p className="text-[11px] sm:text-xs font-light text-ivory/70 leading-relaxed mb-3">
                Build the physical foundation, then explore the interconnected human system.
              </p>
            </div>

            <div>
              {/* Format & Duration (Left) + Pricing (Right) */}
              <div className="pt-2.5 border-t border-softgold/15 flex items-end justify-between gap-3 mb-2.5">
                <div className="text-[10px] sm:text-[11px]">
                  <span className="block uppercase tracking-[0.22em] text-softgold font-semibold">
                    ONLINE + OFFLINE
                  </span>
                  <span className="block font-light text-ivory/70 tracking-wider mt-0.5">
                    Offline: <span className="text-ivory font-normal">3 Nights · 4 Days</span>
                  </span>
                </div>

                {/* Right Side: Neatly Aligned Pricing */}
                <div className="text-right flex flex-col items-end justify-end shrink-0">
                  <div className="font-serif-editorial text-xl sm:text-2xl text-ivory font-normal tracking-wide leading-tight">
                    ₹5,999
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-saffron font-semibold leading-tight mt-0.5">
                    BONUS
                  </span>
                </div>
              </div>

              {/* Action Button: Directly Trigger Enquiries / Payment Modal */}
              <div>
                <button
                  type="button"
                  onClick={() => onJoinCourse?.('01 — FOUNDATION + SYSTEM')}
                  className="w-full group inline-flex items-center justify-between bg-saffron hover:bg-saffron-hover text-midnight font-medium px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span className="font-semibold">JOIN THE COURSE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* 02 — THE COMPLETE JOURNEY */}
          <div className="relative bg-indiangreen-deep/75 backdrop-blur-sm border border-softgold/35 p-4 sm:p-5 md:p-6 flex flex-col justify-between hover:border-saffron/60 transition-all duration-300">
            {/* Subtle corner accent line */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-saffron to-transparent" />

            <div className="flex-1 flex flex-col">
              {/* Header Row: Label & Number */}
              <div className="flex items-center justify-between pb-2.5 border-b border-softgold/15 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-softgold font-semibold">
                    02 — THE COMPLETE JOURNEY
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-saffron/40 bg-saffron/15 text-saffron font-medium">
                  ALL 3 COURSES
                </span>
              </div>

              {/* Course Titles */}
              <div className="space-y-1 mb-3">
                <div className="font-serif-editorial text-base sm:text-lg md:text-xl text-ivory leading-snug font-normal">
                  Asthi Sanchalan Sanjeevani
                </div>
                <div className="text-softgold/70 text-xs font-serif-editorial italic">
                  +
                </div>
                <div className="font-serif-editorial text-base sm:text-lg md:text-xl text-ivory leading-snug font-normal">
                  Sanjeevani — The Antidote
                </div>
                <div className="text-softgold/70 text-xs font-serif-editorial italic">
                  +
                </div>
                <div className="font-serif-editorial text-base sm:text-lg md:text-xl text-ivory leading-snug font-normal">
                  Surya Sanjeevani
                </div>
              </div>

              {/* Progression Line: FOUNDATION -> SYSTEM -> INNER EXPERIENCE */}
              <div className="my-2.5 py-1.5 px-3 bg-indiangreen-surface/60 border border-softgold/20">
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-softgold/90 mb-1">
                  <span>PATHWAY</span>
                </div>
                <div className="relative flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs tracking-wider text-ivory/80">
                  <span className="text-softgold font-medium shrink-0">FOUNDATION</span>
                  <div className="flex-1 h-[1px] bg-softgold/20 relative overflow-hidden min-w-[14px]">
                    <div
                      className={`absolute inset-0 bg-saffron transition-transform duration-1000 delay-150 ease-out origin-left ${
                        isVisible ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                  <span className="text-softgold font-medium shrink-0">SYSTEM</span>
                  <div className="flex-1 h-[1px] bg-softgold/20 relative overflow-hidden min-w-[14px]">
                    <div
                      className={`absolute inset-0 bg-saffron transition-transform duration-1000 delay-300 ease-out origin-left ${
                        isVisible ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                  <span className="text-saffron font-medium shrink-0">INNER EXPERIENCE</span>
                </div>
              </div>

              {/* Small Description */}
              <p className="text-[11px] sm:text-xs font-light text-ivory/70 leading-relaxed mb-3">
                Move from physical foundation to deeper exploration of the human system and inner experience.
              </p>
            </div>

            <div>
              {/* Format & Duration (Left) + Pricing (Right) */}
              <div className="pt-2.5 border-t border-softgold/15 flex items-end justify-between gap-3 mb-2.5">
                <div className="text-[10px] sm:text-[11px]">
                  <span className="block uppercase tracking-[0.22em] text-softgold font-semibold">
                    ONLINE + OFFLINE
                  </span>
                  <span className="block font-light text-ivory/70 tracking-wider mt-0.5">
                    Offline: <span className="text-ivory font-normal">3 Nights · 4 Days</span>
                  </span>
                </div>

                {/* Right Side: Neatly Aligned Pricing */}
                <div className="text-right flex flex-col items-end justify-end shrink-0">
                  <div className="font-serif-editorial text-xl sm:text-2xl text-ivory font-normal tracking-wide leading-tight">
                    ₹7,999
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-saffron font-semibold leading-tight mt-0.5">
                    BONUS
                  </span>
                </div>
              </div>

              {/* Action Button: Directly Trigger Enquiries / Payment Modal */}
              <div>
                <button
                  type="button"
                  onClick={() => onJoinCourse?.('02 — THE COMPLETE JOURNEY')}
                  className="w-full group inline-flex items-center justify-between bg-saffron hover:bg-saffron-hover text-midnight font-medium px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span className="font-semibold">JOIN THE COURSE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
