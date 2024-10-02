import Image from "next/image";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import ScheduleDialog from "@/components/scheduleDialog";
import Section from "@/components/section";
import Card from "@/components/card";
import Testimonial from "@/components/testimonial";
import { MapPin, Truck  } from 'lucide-react';

const features = [{
                    title:"Professional Garment Care",
                    desc:"Our team of experts follows world-class cleaning processes to ensure your garments receive the best possible care.",
                    icon:"/assets/icons/care.png"
                  },
                  {
                    title:"Flexible Payment Options",
                    desc:"Choose your preferred payment method: Card, Net Banking, E-Wallets, UPI, or Cash. We support all major modes of payment for your convenience.",
                    icon:"/assets/icons/payment.png"
                  },
                  {
                    title:"Free Pickup & Delivery",
                    desc:"Schedule and manage your pickups and deliveries seamlessly through our website or a quick phone call. Experience hassle-free laundry like never before!",
                    icon:"/assets/icons/pickup-drop.png"
                  },]


const achivements = [{
                    title:"Order Online",
                    desc:"Place your order conveniently through our website or a quick phone call.",
                    icon:"/assets/icons/projects.png"
                  },
                  {
                    title:"Pick Up",
                    desc:"We’ll collect your laundry at the time and location that suits you best.",
                    icon:"/assets/icons/pickup.png"
                  },
                  {
                    title:"Cleaning",
                    desc:"Our professionals will expertly launder or dry clean your clothes, ensuring top-quality results every time.",
                    icon:"/assets/icons/washing.png"
                  },
                  {
                    title:"Drop Off",
                    desc:"We’ll deliver your fresh, clean clothes right to your doorstep, at a time that’s convenient for you.",
                    icon:"/assets/icons/drop.png"
                  },]

const services = [{
                    title:"Laundry Services",
                    desc:"Fast, efficient, and hassle-free laundry solutions to keep your clothes fresh and clean.",
                    img:"/assets/images/laundry.jpg",
                    link:"/"
                  },
                  {
                    title:"Dry Cleaning Services",
                    desc:"Professional dry cleaning for all your household items, no matter the size.",
                    img:"/assets/images/drycleaning.jpg",
                    link:"/"
                  },
                  {
                    title:"Shoe Cleaning Services",
                    desc:"Give your shoes a new lease on life with our specialized shoe cleaning and care.",
                    img:"/assets/images/shoes-washing.jpg",
                    link:"/"
                  },]

export const metadata = {
  title: "Premium Laundry & Dry Cleaners | Fast & Affordable | Tideup",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};

export default function Home() {
  return (
  <>
  <Navbar/>
  <WhatsappBtn/>
  <main>
    <section className="home-banner min-h-screen flex items-center justify-center">
          <div className="pt-24 px-2">
            <h1 className="text-white font-bold md:text-4xl text-2xl text-center uppercase">
            Welcome to Stress-Free Laundry Solutions!
            </h1>
            <h2 className="text-white font-medium md:text-2xl text-xl text-center mt-6 max-w-5xl mx-auto">
                Premium Laundry & Dry Clean Service in Experience Premium Laundry & Dry Cleaning Services in<p className="font-bold text-cyan-300 text-3xl flex item-center justify-center"><MapPin className="mt-1 mr-2"/>Jamshedpur</p>
            </h2>
            <h2 className="text-white font-medium md:text-xl text-lg text-center mt-4 max-w-5xl mx-auto">
            Enjoy up to 20% off on your first order.
            </h2>
           
                <ScheduleDialog className="flex gap-4 justify-center items-center border-2 border-cyan-400 mt-8 md:px-8 px-4 md:py-4 py-2 rounded-lg bg-black/50 mx-auto max-w-fit shadow-lg delay-50 duration-300 hover:scale-105 text-white font-semibold md:text-xl text-base text-center">Book a Free Pickup<Truck /></ScheduleDialog>
        
          </div>
        </section>

        <Section className="w-full" head="We Collect, Clean, and Deliver — Right to Your Doorstep!" subHead="Explore Our Comprehensive Laundry & Dry Cleaning Services">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full justify-center">
            {
              features?.map((item,i)=>(
                <div key={i} className="flex flex-col items-center p-2 reveal">
                    <div className="p-2 rounded-lg bg-cyan-400 mb-4">
                      <Image alt={item?.title} src={item?.icon} width={180} height={180} className=""/>
                    </div>
                    <h2 className="font-semibold text-center md:text-lg text-sm mb-2">{item?.title}</h2>
                    <p className="text-center text-sm mb-4">{item?.desc}</p>
                </div>
              ))
            }
          </div>
        </Section>

        <section className="banner2">
        <div className="max-w-7xl mx-auto py-12 text-gray-100 px-2 reveal">
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {
              achivements?.map((item,i)=>(
                <div key={i} className="flex flex-col items-center p-2 reveal">
                      <Image alt={item?.title} src={item?.icon} width={150} height={150} className="mb-6"/>
                    <h2 className="font-semibold text-center md:text-3xl text-sm mb-2">{item?.title}</h2>
                    <p className="text-center text-sm italic">{item?.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section>

        <Section className="w-full" head="Quality Cleaning, Unmatched Savings!" subHead="Forget traditional methods—experience the future of laundry! Our hi-tech smart machines handle your garments with precision, ensuring gentle yet effective cleaning for every fabric type.">
            <div className="w-full flex justify-center floating">
            <Image src='/assets/images/laundry-banner.png' alt="tideup" width={1900} height={1200} className="max-w-4xl w-full"/>
            </div>
        </Section>

        <Section className="w-full bg-gray-200 reveal" head="Premium Laundry & Dry Cleaning Services in Jamshedpur" subHead="Explore our wide range of laundry and dry cleaning solutions tailored to meet all your needs! Whether it’s daily wear, office attire, shoes, or delicate woolen garments—we’ve got you covered.">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full justify-center">
            {
              services?.map((item,i)=>(
                <Card key={i} title={item?.title} desc={item?.desc} link={item?.link} img={item?.img}/>
              ))
            }
          </div>
        </Section>

        <Testimonial name="Rosie Wiley" img="/assets/images/client.jpg" review="Today, I used their online pickup and drop service, and they delivered exactly as promised. I’m genuinely pleased with the experience! The collection and delivery staff were courteous, punctual, and very professional."/>
  </main>
  <Footer/>
  </>
  );
}