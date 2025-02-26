"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact_us" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header
      className={`w-full py-4 px-16 flex items-center justify-between bg-[#CEEAED] rounded-b-[50px] shadow-lg  top-0 z-50`}
    >
      {/* Logo */}
      <Link href="#" className="hidden md:flex">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
      </Link>

      {/* Navigation Links (Hidden on Mobile) */}
      <nav className="space-x-12 mx-auto">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-blue-600 font-semibold hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Get Started Button */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:block  border-[#D4481B] text-white font-semibold px-4 py-2 rounded-3xl hover:bg-[#ca5a34] bg-[#D4481B] transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-6 flex flex-col items-center md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#D4481B] font-semibold py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )} */}
    </header>
  );
}
