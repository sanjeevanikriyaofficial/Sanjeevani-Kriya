import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  // All three questions collapsed by default
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-ivory text-midnight py-8 sm:py-10 md:py-12 border-t border-softgold/30">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
              COMMON INQUIRIES
            </span>
            <span className="w-5 h-[1.5px] bg-saffron" />
          </div>
          <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-5xl font-normal leading-[1.15] text-midnight tracking-tight mb-4">
            FREQUENTLY ASKED<br />
            <span className="italic font-light text-saffron-hover">QUESTIONS</span>
          </h2>
          <p className="text-sm font-light text-midnight/70">
            Clear, honest answers to foundational questions about the approach, format, and participation.
          </p>
        </div>

        {/* 3 Course Deep-Dive Accordion Rows */}
        <div className="border-t border-softgold/30 divide-y divide-softgold/20">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  id={`faq-question-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-4 sm:py-6 flex items-center justify-between text-left group gap-3 sm:gap-4 cursor-pointer focus:outline-none min-h-[52px]"
                >
                  <span className="font-serif-editorial text-base xs:text-lg sm:text-xl md:text-2xl text-midnight font-normal tracking-wide group-hover:text-saffron-hover transition-colors pr-2 sm:pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-softgold/40 flex items-center justify-center text-midnight group-hover:border-saffron group-hover:text-saffron transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-saffron" />
                    ) : (
                      <Plus className="w-4 h-4 text-midnight/70 group-hover:text-saffron" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[520px] opacity-100 pb-5 sm:pb-6' : 'max-h-0 opacity-0 pb-0 pointer-events-none'
                  }`}
                >
                  <div className="max-h-[460px] overflow-y-auto pr-3 sm:pr-6 border-l-2 border-softgold/40 pl-3.5 sm:pl-5 course-scrollbar space-y-3.5 text-midnight/80">
                    {/* Course Identifier */}
                    <div className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-saffron-hover font-bold">
                      COURSE: {item.course}
                    </div>

                    {/* Introductory Paragraphs */}
                    {item.intro && item.intro.map((para, i) => (
                      <p key={i} className="text-xs sm:text-[13.5px] font-light leading-relaxed">
                        {para}
                      </p>
                    ))}

                    {/* Structured Conceptual Sections */}
                    {item.sections && item.sections.map((section, sIdx) => (
                      <div key={sIdx} className="pt-1.5 space-y-2">
                        {section.heading && (
                          <h4 className="font-serif-editorial text-sm sm:text-base font-semibold text-midnight tracking-wider uppercase pt-1">
                            {section.heading}
                          </h4>
                        )}
                        {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs sm:text-[13.5px] font-light leading-relaxed">
                            {p}
                          </p>
                        ))}
                        {section.bullets && (
                          <ul className="space-y-1 my-1.5 pl-0.5">
                            {section.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] font-light leading-snug">
                                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.flow && (
                          <div className="my-2 py-1.5 px-3 border border-softgold/30 bg-softgold/5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-midnight/90 font-medium">
                            {section.flow}
                          </div>
                        )}
                        {section.callout && (
                          <div className="my-2.5 py-2 px-3 bg-midnight/5 border-l-2 border-softgold/60 text-xs text-midnight/85 font-light leading-relaxed whitespace-pre-line">
                            {section.callout}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Fallback for simple answer string */}
                    {item.answer && !item.intro && (
                      <p className="text-xs sm:text-[13.5px] font-light leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
