import Image from "next/image";

import { AppScreenshot } from "@/lib/content";

type ScreenshotStripProps = {
  slides: AppScreenshot[];
};

export function ScreenshotStrip({ slides }: ScreenshotStripProps) {
  if (slides.length === 0) return null;

  return (
    <div
      className="flex gap-5 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden"
      aria-label="App screenshots"
    >
      {slides.map((slide, index) => (
        <figure
          key={slide.src}
          className="w-[14rem] shrink-0 sm:w-[16rem] lg:w-[18rem]"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_20px_60px_rgba(26,23,48,0.12)]">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={554}
              height={1200}
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              className="h-auto w-full"
              priority={index === 0}
            />
          </div>
          {slide.caption ? (
            <figcaption className="mt-4 text-center text-sm font-medium text-[var(--muted-ink)]">
              {slide.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
