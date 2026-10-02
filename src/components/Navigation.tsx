import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onBeginJourney?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onBeginJourney }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'THE APPROACH', href: '#the-approach' },
    { label: 'COURSES', href: '#courses' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-midnight-deep border-b border-softgold/20 py-3 shadow-lg'
            : 'bg-transparent py-5 sm:py-6'
        }`}
        style={{ backgroundColor: isScrolled || mobileMenuOpen ? '#09101B' : undefined }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center transition-opacity hover:opacity-90 py-1 focus:outline-none"
            aria-label="Sanjeevani Kriya"
          >
            <img
              src="/logo%20sanjeevani.png"
              alt="Sanjeevani Kriya"
              className="h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-all"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-softgold transition-colors duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-softgold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Direct CTA - Playful architectural shape that morphs on hover */}
            <button
              onClick={() => {
                if (onBeginJourney) {
                  onBeginJourney();
                } else {
                  const el = document.querySelector('#courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative flex items-center gap-2.5 bg-gradient-to-r from-saffron/15 via-saffron/25 to-softgold/20 hover:from-saffron hover:to-saffron-hover text-ivory hover:text-midnight pl-4 pr-3 py-2 text-xs transition-all duration-500 ease-out border border-softgold/60 hover:border-saffron shadow-sm hover:shadow-saffron/25 rounded-[22px_6px_22px_6px] hover:rounded-[6px_22px_6px_22px] cursor-pointer"
            >
              <span className="font-serif-editorial text-[14px] sm:text-base italic tracking-wide text-ivory group-hover:text-midnight font-normal transition-colors">
                Book Consultation
              </span>
              <div className="w-5 h-5 rounded-full bg-softgold/20 group-hover:bg-midnight/15 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-softgold group-hover:text-midnight transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-ivory p-2 focus:outline-none focus:ring-1 focus:ring-softgold/50 rounded-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-softgold" /> : <Menu className="w-6 h-6 text-ivory" />}
          </button>
        </div>

        {/* Mobile Editorial Drawer - 100% Solid Opaque Background */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 border-b border-softgold/25 transition-all duration-300 overflow-y-auto max-h-[calc(100vh-80px)] shadow-2xl ${
            mobileMenuOpen
              ? 'opacity-100 visible py-6 px-6 pointer-events-auto'
              : 'opacity-0 invisible max-h-0 py-0 px-6 pointer-events-none'
          }`}
          style={{ backgroundColor: '#09101B' }}
        >
          <div className="flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-softgold/80 border-b border-softgold/15 pb-2">
              EXPLORE THE APPROACH
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-serif-editorial text-2xl text-ivory hover:text-softgold transition-colors py-2 flex items-center min-h-[44px]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-softgold/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onBeginJourney) {
                    onBeginJourney();
                  } else {
                    const el = document.querySelector('#courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-between border border-softgold/60 bg-saffron text-midnight font-medium px-5 py-3.5 text-xs transition-colors rounded-[20px_6px_20px_6px] active:scale-[0.99]"
              >
                <span className="font-serif-editorial text-base italic font-normal text-midnight tracking-wide">
                  Book Consultation
                </span>
                <ArrowUpRight className="w-4 h-4 text-midnight" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
