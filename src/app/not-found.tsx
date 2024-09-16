import Link from "next/link";
import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";

export const metadata = {
  title: "Page Not Found | [Company Name]",
  description: "Oops! It looks like the page you're looking for doesn't exist. Don't worry, let's get you back on track. Return to our homepage or explore our website to find the information you're seeking. If you need further assistance, feel free to contact us directly.",
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