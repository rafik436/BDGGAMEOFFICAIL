import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqEntry } from '../lib/seo';

interface FaqAccordionProps {
  items: FaqEntry[];
  heading?: string;
}

export function FaqAccordion({ items, heading }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {heading && (
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
      )}
      <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#111216]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="group">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FACC15]"
              >
                <span className="text-base font-medium text-white">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#FACC15] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
