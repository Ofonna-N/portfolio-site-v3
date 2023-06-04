"use client";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import React, { useEffect, useRef, useState } from "react";
import GalleryItem from "./GalleryItem";

type Props = {
  children: React.ReactNode;
};

const ImageGallery = ({ children }: Props) => {
  const scrollPanelRef = useRef<HTMLUListElement | null>(null);
  const [selectedImg, setSelectedImg] = useState(1);

  useEffect(() => {
    // console.log(selectedColor);
    if (scrollPanelRef.current) {
      scrollPanelRef.current.scroll({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <ul
        ref={scrollPanelRef}
        className="flex h-full overflow-x-auto snap-x snap-mandatory lg:no-scrollbar"
      >
        {children}
        {/* {Array.from({ length: 5 }).map((_, i) => (
          <GalleryItem key={i} className="">
            <div className="bg-red-800 w-full h-full flex justify-center items-center shrink-0">
              <span className="bg-slate-400 px-3 rounded-lg">{i}</span>
            </div>
          </GalleryItem>
        ))} */}
      </ul>
      <div className="absolute flex justify-center py-[2rem]">
        <span className="px-[3px]"></span>
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[120%] 
      hidden items-center justify-between text-[10rem] pointer-events-none lg:flex"
      >
        <button
          className="relative pointer-events-auto"
          onClick={() => {
            scrollPanelRef.current?.scrollTo({
              left:
                scrollPanelRef.current.scrollLeft -
                scrollPanelRef.current.offsetWidth,
              behavior: "smooth",
            });
          }}
        >
          <RxCaretLeft />
        </button>
        <button
          className="relative pointer-events-auto"
          onClick={() => {
            scrollPanelRef.current?.scrollTo({
              left:
                scrollPanelRef.current.scrollLeft +
                scrollPanelRef.current.offsetWidth,
              behavior: "smooth",
            });
          }}
        >
          <RxCaretRight />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
