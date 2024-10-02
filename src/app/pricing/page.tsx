import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Section from "@/components/section"
import PricingCard from "@/components/pricingCard";
import { pricing } from "./data";

export const metadata = {
  title: "Pricing | Tideup | Premium Laundry & Dry Cleaners",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};

export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"PRICING"} className="about-banner" />
      <Section className="w-full" head="Affordable Pricing for Premium Laundry Services" subHead="Explore our transparent pricing options tailored to meet all your laundry and dry cleaning needs—no hidden fees, just great value!">
          <div className="max-w-3xl mx-auto">
           {
            pricing?.map((item)=>(   
              <PricingCard key={item?.title} pricing={item}/>
            ))
           }
          </div>
        </Section>
        <Testimonial name="Rosie Wiley" img="/assets/images/client.jpg" review="Today, I tried online order for pick up n drop service. They served exactly what they promised, am really pleased. Their collection n delivery person was also very well mannered, punctual and understanding."/>
    </main>
    <Footer/>
    </>
  );
}