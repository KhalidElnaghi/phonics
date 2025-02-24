import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed top-1/2 right-6 transform -translate-y-1/2 bg-[#CEEAED] text-white p-3 rounded-full shadow-lg hover:bg-[#bae9ee] transition duration-300"
    >
      <Image src="/images/up-arrow.svg" alt="Hero" width={20} height={20} />
    </button>
  );
};

export default ScrollToTop;
