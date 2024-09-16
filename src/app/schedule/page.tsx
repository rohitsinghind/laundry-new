import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";

export const metadata = {
  title: "Schedule | [Company Name]",
  description: "Learn more about [Company Name] and our mission to provide innovative web and app development solutions. Discover our team's expertise, values, and commitment to delivering exceptional results that drive your business forward.",
};

export default function Page() {
  
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"SCHEDULE"} className="about-banner" />
    </main>
    <Footer/>
    </>
  );
}