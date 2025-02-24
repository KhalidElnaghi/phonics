"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full mt-auto py-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Social Icons */}
        <div className="flex gap-3 mb-4 md:mb-0">
          <a
            href="https://x.com/maharatona?s=11&t=xmHeRti1I9OFbL6s-GymfA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white shadow-md rounded-full"
          >
            <Image
              src="/icons/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/maharatona?igsh=ZzFhMWE5ZDN3aG8z"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white shadow-md rounded-full"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://snapchat.com/t/REoOjd5p"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white shadow-md rounded-full"
          >
            <Image
              src="/icons/snapchat.svg"
              alt="Snapchat"
              width={24}
              height={24}
            />
          </a>
        </div>

        {/* Privacy Policy */}
        <div className="text-center">
          <Link
            href="/privacy"
            className="text-primary font-bold hover:underline"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Logo */}
        <div>
          <Image
            src="/assets/logo/logo.svg"
            alt="Logo"
            width={100}
            height={70}
          />
        </div>
      </div>
    </footer>
  );
}
