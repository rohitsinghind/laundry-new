import React from 'react';
import ScheduleDialog from './scheduleDialog';
import { Truck } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  return (
    <section className={className}>
      <div className="py-28 px-2">
        <h1 className="text-white font-bold md:text-4xl text-2xl text-center uppercase">
          {title}
        </h1>
        <h2 className="text-white font-semibold md:text-2xl text-lg text-center mt-4">
          COMPANY NAME
        </h2>
      </div>
      <div className="w-full bg-black/50 flex justify-center items-center sm:gap-6 gap-3 py-4 px-2">
        <h2 className="text-center text-white font-semibold md:text-xl sm:text-base text-sm">
          Schedule a Free Pickup
        </h2>
        <div className="flex flex-col justify-center">
          <ScheduleDialog className="w-fit mx-auto bg-cyan-400 hover:bg-transparent border rounded border-cyan-400 text-white hover:text-cyan-400 py-2.5 px-6 font-semibold md:text-lg text-sm flex justify-center items-center gap-2 delay-50 duration-300 fill-white hover:fill-cyan-400">
            SCHEDULE NOW 
            <Truck />
          </ScheduleDialog>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
