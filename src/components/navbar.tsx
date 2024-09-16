"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
// import ContactBtn from "./contactBtn";
import { House, Truck, ReceiptIndianRupee, MapPinHouse, BadgeHelp } from 'lucide-react';

const navLinks = [
  { title: "Home", link: "/", icon:House },
  { title: "Schedule", link: "/schedule", icon:Truck },
  { title: "Pricing", link: "/pricing", icon:ReceiptIndianRupee },
  { title: "Stores", link: "/stores", icon:MapPinHouse },
  { title: "Help", link: "/help", icon:BadgeHelp },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "active-navbar" : ""} navbar w-full shadow-b-lg fixed z-50`}>
      <div className="max-w-7xl mx-auto py-4 px-2 flex justify-between gap-4">
        <Link href="/">
          <h1 className="text-white">Logo</h1>
        </Link>
        <div className="flex lg:justify-between w-full max-w-2xl justify-end items-center lg:gap-10 gap-4">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`${
                pathname === item.link
                  ? "underline underline-offset-[5px] decoration-[2.5px] text-cyan-400"
                  : "text-white"
              } font-semibold uppercase text-sm hover:text-cyan-400 hover:scale-105 duration-300 delay-50 md:flex hidden item-center gap-1`}
            >
              <item.icon className="pb-1"/>{item.title}
            </Link>
          ))}
          {/* <ContactBtn className="bg-cyan-400 ml-2 px-4 py-2 rounded-md text-white font-semibold text-sm hover:bg-transparent hover:text-cyan-400 border border-cyan-400 delay-50 duration-300">
            Contact Us
          </ContactBtn> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden pr-2"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#9d9d9d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="fixed sidenav md:hidden z-50 top-0 right-0 bottom-0 flex flex-col max-w-56 py-4 bg-black/90 border-r overflow-y-auto">
            <div className="flex items-center justify-end mb-4 px-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <hr className="w-full border border-gray-700" />
            {navLinks.map((link, i) => (
              <div key={i}>
                <Link
                  href={link.link}
                  className={`${
                    pathname === link.link ? "bg-cyan-400 text-white " : ""
                  } px-8 py-2.5 min-w-fit flex text-cyan-400 font-semibold hover:text-white hover:bg-cyan-400 md:text-base text-sm text-nowrap`}
                >
                  {link.title}
                </Link>
                <hr className="w-full border border-gray-700" />
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
