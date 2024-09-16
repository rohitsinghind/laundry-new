import Image from "next/image";
import { FC } from "react";
import ScheduleDialog from "./scheduleDialog";
import { Truck } from 'lucide-react';

interface CardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const Card: FC<CardProps> = ({ img, title, desc, link }) => {
  return (
    <ScheduleDialog
      className="border bg-white border-gray-300 rounded shadow max-w-96 delay-50 duration-300 hover:scale-105 hover:shadow-lg w-full reveal mx-auto"
    >
      <Image
        src={img}
        alt={title}
        width={600}
        height={300}
        className="h-56 w-full object-cover object-center"
      />
      <div className="sm:px-2.5 px-2 sm:py-8 py-6">
        <h2 className="font-bold text-center md:text-lg text-sm mb-2">
          {title}
        </h2>
        <p className="text-center text-sm mb-4">{desc}</p>
        <div className="flex flex-col justify-center">
          <div className="w-fit mx-auto bg-cyan-400 hover:text-cyan-400 hover:fill-cyan-400 fill-white hover:bg-transparent border rounded hover:border-cyan-400 py-2.5 px-6 font-semibold md:text-base text-sm flex justify-center items-center gap-2 text-white delay-50 duration-300 uppercase">
           Schedule Now{" "}
            <Truck/>
          </div>
        </div>
      </div>
    </ScheduleDialog>
  );
};

export default Card;
