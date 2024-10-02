import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Faqs from "@/components/faqs";

const faqs = [
  {
    title: "How can I schedule my maiden service?",
    desc: "An order can be scheduled through our website, or by calling at +91 930-419-1710. You can also visit to our store.",
  },
  {
    title: "What's the usual turnaround time?",
    desc: "We take 24 to 72 hours depending on the service, you are looking for. You can also opt for express delivery in case of emergency.",
  },
  {
    title: "What is the minimum order value?",
    desc: "Our Minimum order value is Rs 250. You can also visit our live laundry and dryclean store to avoid minimum order amount.",
  },
  {
    title: "How to contact your support team in case of a query/complaint?",
    desc: "You can call us at +91 930-419-1710 or write to us at contact@tideup.in. We will be more than happy to resolve it.",
  },
  {
    title: "Are their things that you will not Clean?",
    desc: "We are a one-stop cleaning company providing you with all possible services connected with Laundry, Dry-cleaning, Steam ironing and Shoe & Backpack Laundry. Our portfolio is limited to these areas as of now. However, in future, we would introduce more and more innovative services, and we will keep you posted.",
  },
  {
    title: "How do I make payment?",
    desc: "We accept cash, card, UPI, wallet and other online methods. You can make payment through our website, payment link.",
  },
];

export const metadata = {
  title: "Help | Tideup | Premium Laundry & Dry Cleaners",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};


export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"HELP"} className="about-banner" />
      <Faqs faqs={faqs} />
      <Testimonial name="Rosie Wiley" img="/assets/images/client.jpg" review="Today, I tried online order for pick up n drop service. They served exactly what they promised, am really pleased. Their collection n delivery person was also very well mannered, punctual and understanding."/>
    </main>
    <Footer/>
    </>
  );
}