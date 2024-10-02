import Image from "next/image";
import { Star } from 'lucide-react';
import { FC } from "react";

interface TestimonialProps {
  name: string;
  review: string;
  img: string;
}

const Testimonial: FC<TestimonialProps> = ({ name, review, img }) => {
  return (
    <section className="w-full bg-cyan-500">
      <div className="max-w-5xl mx-auto py-12 text-gray-100 px-2">
        <div className="flex justify-center sm:flex-row flex-col items-center w-full">
          <div className="flex justify-center items-center gap-6 w-full">
            <Image
              src={img}
              height={100}
              width={100}
              alt={name}
              className="rounded-full border-2 border-white p-1"
            />
            <div>
              <h3 className="font-bold md:text-lg text-sm text-nowrap">{name}</h3>
              <div className="text-yellow-400 flex gap-1 mt-1"><Star/><Star/><Star/><Star/><Star/></div>
            </div>
          </div>
          <hr className="sm:border-r border-b border-white sm:h-28 sm:mx-8 sm:my-0 my-6 sm:w-0 w-full max-w-72" />
          <div>
            <p className="text-base text-wrap text-center">❝ {review} ❞</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
