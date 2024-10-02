import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Laundry & Dry Cleaners | Fast & Affordable | Tideup",
  description: "Get your laundry done quickly and professionally with Tideup. We offer top-quality washing, dry cleaning, and ironing services at affordable prices. Book a pickup now!",
  keywords:['Laundry Service', 'Dry Cleaning', 'Ironing', 'Clothes Washing', 'Laundry Pickup and Delivery', 'Affordable Laundry', 'Fast Laundry Service', 'Jamshedpur Laundry']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} <Toaster />  <Script id="my-script">
    {
      `
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 0;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      reveal()
      
      window.addEventListener("scroll", reveal);
      `
    }
  </Script></body>
    </html>
  );
}
