"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { instructors } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 4500;

export function InstructorCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = instructors[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % instructors.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <figure
      className="relative mx-auto max-w-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Instrutores do treinamento"
    >
      <div className="absolute -inset-3 rounded-[2rem] border border-border" />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-border-strong bg-surface">
        <div className="relative aspect-[4/5]">
          {instructors.map((person, i) => (
            <Image
              key={person.name}
              src={person.image}
              alt={`Retrato profissional de ${person.name}, ${person.role.toLowerCase()} do treinamento TikTok Monetizado`}
              width={person.width}
              height={person.height}
              sizes="(max-width: 1024px) 80vw, 380px"
              priority={i === 0}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_top,color-mix(in_oklab,var(--background)_85%,transparent),transparent_45%)]" />
        <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur">
          <p className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
            {current.role}
          </p>
          <p className="mt-1 truncate text-sm font-bold" aria-live="polite">
            {current.name}
          </p>
          <div className="mt-3 flex gap-1.5" role="tablist" aria-label="Selecionar instrutor">
            {instructors.map((person, i) => (
              <button
                key={person.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={person.name}
                onClick={() => setIndex(i)}
                className={cn(
                  "pointer-events-auto h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-pink" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70",
                )}
              />
            ))}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
