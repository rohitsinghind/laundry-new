import Link from "next/link";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";

export const metadata = {
  title: "Premium Laundry & Dry Cleaners | Fast & Affordable | Tideup",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};


export default function NotFound() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <section className="home-banner">
    <div className="max-w-5xl mx-auto min-h-screen justify-center px-2 flex flex-col items-center">
      <h2 className="text-center font-bold sm:text-6xl text-4xl mb-4 text-white">Page Not Found</h2>
      <Link
        href="/"
        className="text-center text-lg font-medium text-cyan-400 hover:text-cyan-500"
      >
        Back to Home
      </Link>
    </div>
    </section>
    <Footer/>
    </>
  );
}