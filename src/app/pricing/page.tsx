import Navbar from "@/components/navbar";
import WhatsappBtn from "@/components/whatsappBtn";
import Footer from "@/components/footer";
import PageHeader from "@/components/pageHeader";
import Testimonial from "@/components/testimonial";
import Section from "@/components/section"
import PricingCard from "@/components/pricingCard";

const pricing = [{
  title:"Laundry By Weight",
  icon:"",
  tabs:[{
    title:"All",
    services:[{
      title:"wash & Fold",
      price:"₹ 80/kg"
    },
    {
      title:"Wash & Iron",
      price:"₹ 120/Kg"
    },
    {
      title:"Premium Laundry",
      price:"₹ 190/kg"
    },
  ]}]},
{
  title:"Shirt",
  icon:"",
  tabs:[{
    title:"Kids",
    services:[{
      title:"Dry Clean",
      price:"₹ 95/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 20/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},
  {
    title:"Silk",
    services:[{
      title:"Dry Clean",
      price:"₹ 120/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 20/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},
  {
    title:"Cotton",
    services:[{
      title:"Dry Clean",
      price:"₹ 95/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 20/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},
  ]
},
{
  title:"T-Shirt",
  icon:"",
  tabs:[{
    title:"Kids",
    services:[{
      title:"Dry Clean",
      price:"₹ 90/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 15/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},
  {
    title:"Cotton",
    services:[{
      title:"Dry Clean",
      price:"₹ 90/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 15/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},
  {
    title:"Long Sleeves",
    services:[{
      title:"Dry Clean",
      price:"₹ 95/pc"
    },
    {
      title:"Steam Press",
      price:"₹ 20/pc"
    },
    {
      title:"Starching",
      price:"₹ 25/pc"
    },
    {
      title:"Prem... Steam Press",
      price:"₹ 25/pc"
    },
  ]},]
},

]

export default function Page() {
  return (
    <>
    <Navbar/>
    <WhatsappBtn/>
    <main>
      <PageHeader title={"PRICING"} className="about-banner" />
      <Section className="w-full" head="We Collect, Clean, and Deliver your Laundry and Dry Cleaning at your Doorstep" subHead="Discover comprehensive range of laundry and dry clean">
          <div className="max-w-3xl mx-auto">
           {
            pricing?.map((item)=>(   
              <PricingCard key={item?.title} pricing={item}/>
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