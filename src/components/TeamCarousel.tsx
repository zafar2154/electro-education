import { useEffect, useRef, useState } from 'react';
import type { TeamMember } from '../data/team';
import { TeamMemberCard } from './TeamMemberCard';

interface TeamCarouselProps {
  members: TeamMember[];
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, members.length - 1));
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  // Lacak kartu mana yang paling dekat dengan tengah viewport saat scroll (drag manual atau swipe)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = Math.abs(cardCenter - trackCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });
        setActiveIndex(closestIndex);
      });
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [members.length]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((member, i) => (
          <div
            key={member.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="w-64 shrink-0 snap-center sm:w-72"
          >
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Sebelumnya"
          className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink-soft transition-colors hover:border-chalkboard hover:text-chalkboard disabled:opacity-30 disabled:hover:border-ink/15 disabled:hover:text-ink-soft"
        >
          ←
        </button>

        <div className="flex gap-1.5">
          {members.map((member, i) => (
            <button
              key={member.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ke ${member.name}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === activeIndex ? 'bg-chalkboard' : 'bg-ink/15'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === members.length - 1}
          aria-label="Berikutnya"
          className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink-soft transition-colors hover:border-chalkboard hover:text-chalkboard disabled:opacity-30 disabled:hover:border-ink/15 disabled:hover:text-ink-soft"
        >
          →
        </button>
      </div>
    </div>
  );
}
