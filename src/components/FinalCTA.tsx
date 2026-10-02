import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onExploreCourses?: () => void;
  onOpenWhatsApp?: (courseName?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  return (
    <section className="bg-midnight text-ivory py-10 sm:py-12 md:py-14 relative overflow-hidden border-t border-softgold/25">
      {/* Background Subtle Circles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-softgold/30" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
          <span className="w-6 h-[1px] bg-saffron" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-softgold font-semibold">
            AN INVITATION
          </span>
          <span className="w-6 h-[1px] bg-saffron" />
        </div>

        {/* Large Serif Headline */}
        <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-ivory tracking-tight mb-6 sm:mb-8 max-w-3xl">
          PERHAPS THE NEXT THING<br />
          TO UNDERSTAND<br />
          <span className="italic font-light text-softgold">IS WITHIN YOU.</span>
        </h2>

        {/* Prominent Centered Saffron Gold "SPEAK WITH US" CTA */}
        <a
          href="https://wa.me/message/QN3GGJAH6P5VO1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-saffron hover:bg-saffron-hover text-midnight font-semibold px-7 sm:px-11 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] transition-all duration-300 shadow-xl hover:shadow-saffron/25 cursor-pointer active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-midnight stroke-[2]" />
          <span>SPEAK WITH US</span>
        </a>

      </div>
    </section>
  );
};
