"use client";

import {Box} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import Button from "../../../public/images/drag-effect/button.png";
import {FC, useEffect, useRef} from "react";
import {fromEvent, switchMap, takeUntil, merge, map, tap} from "rxjs";

export const DragEffect: FC<{ Bg: StaticImageData, Effect: StaticImageData, maxWidth: number }> = ({Bg, Effect, maxWidth}) => {
  const ref = useRef<HTMLImageElement>(null);
  const effectRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const parentElement = el.parentElement!;
    const down$ = fromEvent<MouseEvent>(el, "mousedown");

    el.style.transform = `translateX(${2 * parentElement.offsetWidth / 3}px)`;
    effectRef.current!.style.width = `${parentElement.offsetWidth / 3}px`;

    const mouseDrag = fromEvent<MouseEvent>(el, "mousedown").pipe(
      switchMap(() => {
        return fromEvent<MouseEvent>(window, "mousemove").pipe(takeUntil(fromEvent(window, "mouseup")));
      }),
    );

    const touchDrag = fromEvent<TouchEvent>(el, "touchstart").pipe(
      switchMap((e) => {
        e.preventDefault();
        e.stopPropagation();
        return fromEvent<TouchEvent>(window, "touchmove").pipe(
          tap((ee) => {
            ee.preventDefault();
            ee.stopPropagation();
          }),
          takeUntil(fromEvent(window, "touchend")),
        );
      }),
    );

    const subscriber = merge(mouseDrag, touchDrag).subscribe((moveEvent: MouseEvent | TouchEvent) => {
      const parentElementLeft = parentElement.getClientRects()[0].left;
      const x = (moveEvent as MouseEvent).clientX || (moveEvent as TouchEvent)?.targetTouches?.[0]?.clientX;
      const left = Math.min(Math.max(x - parentElementLeft, 10), parentElement.offsetWidth - 10);
      el.style.transform = `translateX(${left}px)`;
      effectRef.current!.style.width = `${parentElement.offsetWidth - left}px`;
    });

    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  return (
    <Box
      h="100%"
      w="100%"
      pos="relative"
      overflow="hidden"
      sx={{
        ".img": {
          pos: "absolute",
          width: `${maxWidth < 1000 ? "auto" : maxWidth + 'px'}`,
          height: "100%",
          top: "-1px",
          right: 0,
          objectPosition: "right",
          objectFit: { base: "contain", lg: "cover" },
        },
        ".img.bg": {
          zIndex: 0,
        },
        ".img.effect": {
          zIndex: 1,
          width: `${maxWidth < 1000 ? "auto" : '557px'}`,
          display: { base: "none", lg: "block" },
          maxWidth: `${maxWidth + 'px'}`
        },
        ".button": {
          objectFit: "cover",
          w: "46px",
          pos: "absolute",
          // width: "auto",
          height: "100%",
          top: 0,
          left: "-25px",
          zIndex: 2,
          display: { base: "none", lg: "block" },
        },
      }}
    >
      <Image {...Bg} alt="bg" className="img" draggable={false} />
      <Image ref={effectRef} {...Effect} alt="effect" className="img effect" draggable={false}  />
      <Image {...Button} alt="button" className="button" ref={ref} draggable={false} />
    </Box>
  );
};
