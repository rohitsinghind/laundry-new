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
                    title:"Professionally Trained Gearments Care",
                    desc:"All Experts at fabric practice professional world class processes to take care of your garments.",
                    icon:"/assets/icons/care.png"
                  },
                  {
                    title:"Convenient Payment Options",
                    desc:"Pay as you prefer via Card, Net Banking, E-Wallets, UPI, Cash, etc. We accept all modes of payment.",
                    icon:"/assets/icons/payment.png"
                  },
                  {
                    title:"Convenient and Free Pick Up & Drop",
                    desc:"Now schedule and manage your Pickup & Drop conveniently on our Website or a Phone call.",
                    icon:"/assets/icons/pickup-drop.png"
                  },]


const achivements = [{
                    title:"Order Online",
                    desc:"Schedule order using website or Phone call",
                    icon:"/assets/icons/projects.png"
                  },
                  {
                    title:"Pick Up",
                    desc:"We pickup your laundry as per your schedule time",
                    icon:"/assets/icons/pickup.png"
                  },
                  {
                    title:"Cleaning",
                    desc:"We'll expertly launder/dry clean your order with top-quality service",
                    icon:"/assets/icons/washing.png"
                  },
                  {
                    title:"Drop Off",
                    desc:"Delivered at your doorstep at a time comfortable to you",
                    icon:"/assets/icons/drop.png"
                  },]

const services = [{
                    title:"Laundry",
                    desc:"We provide quick and efficient laundry solution for laundry.",
                    img:"/assets/images/laundry.jpg",
                    link:"/mobile-apps"
                  },
                  {
                    title:"Dry Cleaning",
                    desc:"We dry clean for every household items no matter the size.",
                    img:"/assets/images/drycleaning.jpg",
                    link:"website"
                  },
                  {
                    title:"Shoe Cleaning",
                    desc:"Order your Shoe Laundry & Dry Cleaning. Find Shoe Cleaning near you",
                    img:"/assets/images/shoes-washing.jpg",
                    link:"digital-marketing"
                  },]

export const metadata = {
  title: "[Company Name] | Homepage | Web & App Development Solutions | Digital Marketing Services",
  description: "Elevate your online presence with our innovative web and app development solutions and strategic digital marketing services. At [Company Name], we specialize in crafting custom websites and mobile apps that engage users and drive business growth. Explore our services and unleash the full potential of your digital presence today.",
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
              Say Hello To The Hassle Free Laundry !
            </h1>
            <h2 className="text-white font-medium md:text-2xl text-xl text-center mt-6 max-w-5xl mx-auto">
                Premium Laundry & Dry Clean Service in <p className="font-bold text-cyan-300 text-3xl flex item-center justify-center"><MapPin className="mt-1 mr-2"/>Jamshedpur</p>
            </h2>
            <h2 className="text-white font-medium md:text-xl text-lg text-center mt-4 max-w-5xl mx-auto">
                Get upto 20% off on your first order
            </h2>
           
                <ScheduleDialog className="flex gap-4 justify-center items-center border-2 border-cyan-400 mt-8 md:px-8 px-4 md:py-4 py-2 rounded-lg bg-black/50 mx-auto max-w-fit shadow-lg delay-50 duration-300 hover:scale-105 text-white font-semibold md:text-xl text-base text-center">Schedule Free Pickup  <Truck /></ScheduleDialog>
        
          </div>
        </section>

        <Section className="w-full" head="We Collect, Clean, and Deliver your Laundry and Dry Cleaning at your Doorstep" subHead="Discover comprehensive range of laundry and dry clean">
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

        <Section className="w-full" head="QUALITY CLEANING WITH GREAT SAVING!" subHead="No Dhobi Ghat, No manual process. Just Hi-Tech smart machines cleaning your gar,ents with all delicacy & expertise required.">
            <div className="w-full flex justify-center floating">
            <Image src='/assets/images/laundry-banner.png' alt="responsive devices" width={1900} height={1200} className="max-w-4xl w-full"/>
            </div>
        </Section>

        <Section className="w-full bg-gray-200 reveal" head="PREMIUM LAUNDRY & DRY CLEAN SERVICE IN JAMSHEDPUR" subHead="Discover comprehensive range of laundry and dry clean services in Jamshedpur. From everyday home wear to Office Attire, Shoes, and even dedicate Woollen Garments, we have you covered.">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full justify-center">
            {
              services?.map((item,i)=>(
                <Card key={i} title={item?.title} desc={item?.desc} link={item?.link} img={item?.img}/>
              ))
            }
          </div>
        </Section>

        <Testimonial name="Jay Pathak" img="/assets/images/clients/jay.jpeg" review="Today, I tried online order for pick up n drop service. They served exactly what they promised, am really pleased. Their collection n delivery person was also very well mannered, punctual and understanding."/>

  </main>
  <Footer/>
  </>
  );
}