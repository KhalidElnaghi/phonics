import Image from "next/image";
import React from "react";

const ContactUsView = () => {
  return (
    <section
      id="contact_us"
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(76,36,109,0.6162114504004728) 0%, rgba(21,14,66,1) 39%)",
      }}
    >
      {/* <Background></Background> with letters */}
      <div className="absolute inset-0 bg-[url('/images/footer.jpeg')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-6 gap-14">
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/phones.svg"
            alt="Phonics App Screens"
            width={600}
            height={400}
          />
        </div>

        <div className="text-white text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-md:text-2xl">
            Give your child a head start in learning letters & sounds.
          </h2>
          <p className="mt-4 text-3xl text-[#F9CD14] font-bold max-md:text-2xl">
            Download Now!
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="block">
              <Image
                src="/images/stores.svg"
                alt="Google Play"
                width={500}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsView;
