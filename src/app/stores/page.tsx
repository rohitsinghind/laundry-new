import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Section from "@/components/section";
import { MapPinHouse, PhoneCall , Mail } from 'lucide-react';

export const metadata = {
  title: "Stores | [Company Name]",
  description: "Learn more about [Company Name] and our mission to provide innovative web and app development solutions. Discover our team's expertise, values, and commitment to delivering exceptional results that drive your business forward.",
};


export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"STORES"} className="about-banner" />
      <Section className="w-full" head="laundry and Dryclean store in Jamshedpur" subHead="">
          <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650.108049392859!2d86.19134430116833!3d22.81852214993532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e39eb6d1b2cd%3A0x54a60fedc77110fa!2sR59R%2BFJ2%2C%20Circuit%20House%20Area%2C%20Sonari%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1726111116174!5m2!1sen!2sin" width="1800" height="450" className="border-0 w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          <div className="flex gap-2 mt-8">
            <MapPinHouse className="text-cyan-400"/>
            <p className="">R59R+FJ2, Circuit House Area, Sonari, Jamshedpur, Jharkhand</p>
          </div>
          <div className="flex gap-2 mt-2">
            <PhoneCall className="text-cyan-400"/>
            <p className="">+91 930-419-1710</p>
          </div>
          <div className="flex gap-2 mt-2">
            <Mail className="text-cyan-400"/>
            <p className="">laundry@gmail.com</p>
          </div>
          </div>
        </Section>
    <Testimonial name="Jay Pathak" img="/assets/images/clients/jay.jpeg" review="Today, I tried online order for pick up n drop service. They served exactly what they promised, am really pleased. Their collection n delivery person was also very well mannered, punctual and understanding."/>
    </main>
    <Footer/>
    </>
  );
}