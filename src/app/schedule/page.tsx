import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";

export const metadata = {
  title: "Schedule | Tideup | Premium Laundry & Dry Cleaners",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};

export default function Page() {
  
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"SCHEDULE"} className="about-banner" />
      <Testimonial name="Rosie Wiley" img="/assets/images/client.jpg" review="Today, I tried their online pickup and drop service, and I was impressed! They delivered exactly what they promised, and I’m truly pleased with the experience. The collection and delivery personnel were courteous, punctual, and very understanding."/>
    </main>
    <Footer/>
    </>
  );
}