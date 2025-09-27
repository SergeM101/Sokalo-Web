import useEmblaCarousel from 'embla-carousel-react';
import { type PropsWithChildren, useEffect, useRef, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps extends PropsWithChildren {
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  slideAnimation?: 'fade' | 'slide';
  animationDuration?: number;
}

export const Carousel = ({ children, interval = 5000, showDots = false, showArrows = false }: CarouselProps) => {
  // embla returns a callback ref and an api object when ready
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slidesCount = Array.isArray(children) ? children.length : 1;

  const play = useCallback(() => {
    if (!emblaApi) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (!emblaApi) return;
      try {
        emblaApi.scrollNext();
      } catch {
        // ignore
      }
    }, interval);
  }, [emblaApi, interval]);

  const pause = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    play();
    return () => {
      pause();
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, play, pause]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  return (
    <div
      className="relative overflow-hidden h-full"
      ref={(node) => {
        emblaRef(node);
        wrapperRef.current = node || null;
      }}
      onMouseEnter={pause}
      onMouseLeave={play}
    >
      <div className="flex h-full">{children}</div>

      {showArrows && (
        <>
          <button aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white z-30" onClick={prev}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white z-30" onClick={next}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-30 flex items-center gap-2">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => scrollTo(i)} className={`w-2 h-2 rounded-full ${i === selectedIndex ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export const CarouselItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 h-full">{children}</div>
  );
};