import Image from "next/image";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Section from "@/components/section";
import Section2 from "@/components/section2";

export const metadata = {
  title: "About Us | [Company Name]",
  description: "Learn more about [Company Name] and our mission to provide innovative web and app development solutions. Discover our team's expertise, values, and commitment to delivering exceptional results that drive your business forward.",
};


export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"ABOUT US"} className="about-banner" />
      
      
    <Testimonial name="Jay Pathak" img="/assets/images/clients/jay.jpeg" review="Today, I tried online order for pick up n drop service. They served exactly what they promised, am really pleased. Their collection n delivery person was also very well mannered, punctual and understanding."/>
    </main>
    <Footer/>
    </>
  );
}