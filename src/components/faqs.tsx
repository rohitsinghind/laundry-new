"use client";
import Section from "./section";
import { useState } from "react";

// Define the types for FAQ items
interface FaqItem {
  title: string;
  desc: string;
}

interface FaqsProps {
  faqs: FaqItem[];
}

export default function Faqs({ faqs }: FaqsProps) {
  const [open, setOpen] = useState<number>(-1);

  const onClickHandle = (i: number) => {
    setOpen((prev) => (prev === i ? -1 : i));
  };

  return (
    <Section className="w-full bg-white" head="FAQS" subHead="All your Queries">
      {faqs?.map((item, i) => (
        <div
          key={i}
          onClick={() => onClickHandle(i)}
          className={`max-w-5xl border p-4 shadow rounded w-full mx-auto hover:border-cyan-400 duration-300 mb-2 cursor-pointer ${
            open === i ? "border-cyan-400" : "border-gray-400"
          }`}
        >
          <div className="flex justify-between items-center w-full gap-2">
            <h2 className="font-bold md:text-lg text-sm">{item?.title}</h2>
            <span>
              <svg
                className={`duration-500 ${
                  open === i ? "fill-cyan-400 rotate-90" : ""
                }`}
                width="24px"
                height="24px"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 23.7109 37.0469 C 22.6327 37.7031 21.4140 37.1875 21.4140 36.0625 L 21.4140 19.9375 C 21.4140 18.8594 22.7030 18.3906 23.7109 18.9766 L 36.8827 26.7812 C 37.8436 27.3437 37.8671 28.6797 36.8827 29.2656 Z"></path>
              </svg>
            </span>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              open === i ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-sm m-2">{item?.desc}</p>
          </div>
        </div>
      ))}
    </Section>
  );
}
