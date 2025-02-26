import Image from "next/image";
import React from "react";

const AboutView = () => {
  return (
    <div
      className="min-h-screen relative px-[50px] py-[100px] flex flex-col justify-center items-center gap-[150px] max-md:gap-10"
      id="about"
    >
      <Image
        src="/images/wave.svg"
        alt="Hero"
        width={500}
        height={100}
        style={{ position: "absolute", right: 0, top: 20 }}
        className="max-md:hidden "
      />
      <Image
        src="/images/wave2.svg"
        alt="Hero"
        width={400}
        height={300}
        style={{ position: "absolute", left: 0, top: 20 }}
        className="max-md:hidden "
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
        className="max-lg:flex-col gap-[100px] max-sm:gap-[50px]"
      >
        <div>
          <h2 className="font-bold text-[32px] leading-[51.26px] text-[#CB236D] max-sm:text-[24px]">
            Trace & Learn
          </h2>
          <p className="font-semibold text-[30px] leading-[51.26px] text-[#022A49] max-sm:text-[20px] max-sm:leading-[20px] max-w-[350px]">
            Follow step-by-step tracing guides and Master handwriting
          </p>
        </div>
        <Image
          src="/images/phone.svg"
          alt="Hero"
          width={250}
          height={300}
          className="max-sm:w-[130px]"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
        className="max-lg:flex-col-reverse gap-[100px] max-sm:gap-[50px]"
      >
        <Image
          src="/images/chars.svg"
          alt="Hero"
          width={300}
          height={300}
          className="max-sm:w-[200px]"
     
        />
        <div>
          <h2 className="font-bold text-[32px] leading-[51.26px] text-[#CB236D] max-sm:text-[24px]">
            Choose the Missing Letter{" "}
          </h2>
          <p className="font-semibold text-[30px] leading-[51.26px] text-[#022A49] max-sm:text-[20px] max-sm:leading-[22px] max-w-[350px]">
            Fun and engaging challenge enhances their ability to recognize
            letter patterns{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
        className="max-lg:flex-col gap-[100px] max-sm:gap-[50px]"
      >
        <div>
          <h2 className="font-bold text-[32px] leading-[51.26px] text-[#CB236D] max-sm:text-[24px]">
            Progress Tracking{" "}
          </h2>
          <p className="font-semibold text-[30px] leading-[51.26px] text-[#022A49] max-sm:text-[20px] max-sm:leading-[22px] max-w-[350px]">
            Watch your little one grow and achieve new learning milestones every
            day!{" "}
          </p>
        </div>
        <Image
          src="/images/numbers.svg"
          alt="Hero"
          width={400}
          height={300}
          className="max-sm:w-[150px]"
        />
      </div>
    </div>
  );
};

export default AboutView;
