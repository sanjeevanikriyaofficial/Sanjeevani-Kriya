import React, { useState, useEffect } from 'react';
import { X, Copy, Check, MessageCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  courseName,
}) => {
  const [copied, setCopied] = useState(false);
  const upiId = '8826009501@ybl';

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(upiId);
      } else {
        // Fallback for non-https or older browser contexts
        const textArea = document.createElement('textarea');
        textArea.value = upiId;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy UPI ID: ', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-midnight-surface border border-softgold/35 shadow-2xl p-5 sm:p-7 text-ivory text-center flex flex-col items-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top hairline gold accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-softgold to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center text-ivory/60 hover:text-ivory hover:bg-softgold/10 transition-colors cursor-pointer border border-transparent hover:border-softgold/20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-softgold/30 bg-softgold/10 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-softgold font-semibold mb-2 mt-1">
          <span>JOIN THE COURSE</span>
        </div>

        {/* Modal Title */}
        <h3
          id="payment-modal-title"
          className="font-serif-editorial text-xl sm:text-2xl text-ivory tracking-wide leading-snug mb-1"
        >
          Scan to Complete Payment
        </h3>

        {/* Selected Course context if provided */}
        {courseName && (
          <p className="text-xs text-softgold/80 font-serif-editorial italic mb-3">
            {courseName}
          </p>
        )}

        {/* QR Code Container with clear white backing for optimal scanner contrast */}
        <div className="bg-white p-3 border-2 border-softgold/35 shadow-lg my-1 max-w-[210px] sm:max-w-[230px] w-full">
          <img
            src="/scanner.png"
            alt="Scan QR code to pay using UPI"
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* UPI ID Row with Small Copy Button */}
        <div className="w-full mt-3.5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/60 mb-1.5 font-medium text-left flex items-center justify-between">
            <span>UPI ID</span>
            <span className="text-[9px] text-ivory/40 lowercase">click copy to use in any upi app</span>
          </div>

          <div className="flex items-center justify-between gap-2 bg-midnight/90 px-3.5 py-2.5 border border-softgold/30">
            <span className="font-mono text-xs sm:text-sm text-softgold font-medium select-all tracking-wider">
              {upiId}
            </span>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] bg-softgold/15 hover:bg-softgold/25 text-softgold border border-softgold/35 transition-all active:scale-95 cursor-pointer font-medium"
              title="Copy UPI ID"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                  <span className="text-emerald-400 font-semibold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-softgold" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Confirmation Step */}
        <div className="mt-4 pt-3.5 border-t border-softgold/15 w-full text-center">
          <p className="text-[11px] text-ivory/70 leading-relaxed font-light mb-2.5">
            After completing payment, please share the screenshot on WhatsApp to confirm your seat.
          </p>
          <a
            href="https://wa.me/message/QN3GGJAH6P5VO1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-indiangreen hover:bg-indiangreen-light text-ivory text-xs uppercase tracking-[0.18em] font-medium transition-colors border border-indiangreen-light/40 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Confirm on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
