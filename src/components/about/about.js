import Image from "next/image";
import React from "react";

const AboutView = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingInline: "50px",
        paddingBlock: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "150px",
      }}
      id="about"
    >
      <Image
        src="/images/wave.svg"
        alt="Hero"
        width={500}
        height={100}
        style={{ position: "absolute", right: 0, top: 20 }}
      />
      <Image
        src="/images/wave2.svg"
        alt="Hero"
        width={500}
        height={300}
        style={{ position: "absolute", left: 0, top: 20 }}
      />

      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#CB236D",
            }}
          >
            Trace & Learn
          </h2>
          <p
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#000000",
              maxWidth: "350px",
            }}
          >
            Follow step-by-step tracing guides and Master handwriting
          </p>
        </div>
        <Image src="/images/phone.svg" alt="Hero" width={250} height={300} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Image src="/images/chars.svg" alt="Hero" width={500} height={300} />
        <div>
          <h2
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#CB236D",
            }}
          >
            Choose the Missing Letter{" "}
          </h2>
          <p
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#000000",
              maxWidth: "350px",
            }}
          >
            Fun and engaging challenge enhances their ability to recognize
            letter patterns{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#CB236D",
            }}
          >
            Progress Tracking{" "}
          </h2>
          <p
            style={{
              fontFamily: "Baloo 2",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "51.26px",
              letterSpacing: "0%",
              color: "#000000",
              maxWidth: "350px",
            }}
          >
            Watch your little one grow and achieve new learning milestones every
            day!{" "}
          </p>
        </div>
        <Image src="/images/numbers.svg" alt="Hero" width={400} height={300} />
      </div>
    </div>
  );
};

export default AboutView;
