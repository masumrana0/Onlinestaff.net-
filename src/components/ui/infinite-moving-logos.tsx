"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect,  useRef } from "react";

interface Company {
  name: string;
  logo: string;
}

interface InfiniteMovingLogosProps {
  items: Company[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingLogos: React.FC<InfiniteMovingLogosProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      const scrollerWidth = scrollerRef.current.offsetWidth;
      const animationDuration = getAnimationDuration(scrollerWidth);

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
    }
  }, [items]);

  const getAnimationDuration = (width: number) => {
    if (speed === "fast") {
      return width / 100;
    } else if (speed === "normal") {
      return width / 50;
    } else {
      return width / 25;
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--animation-direction":
              direction === "left" ? "forwards" : "reverse",
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="w-[250px] max-w-full relative flex-shrink-0 px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="relative w-full h-20 transition-all duration-300 ease-in-out filter grayscale hover:filter-none">
              <Image
                src={item.logo}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                className="transition-all duration-300 ease-in-out h-full w-full"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
