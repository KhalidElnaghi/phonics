"use client";
import React from "react";
import Image from "next/image";
import Header from "../layouts/header";
const HomeView = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #CEEAED 54%, #FFFFFF 100%)",
      }}
      id="home"
    >
      <Header />
      <div
        style={{
          width: "90%",
          height: "90%",
          backgroundImage: "url('/images/hero.svg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
          }}
          className="md:text-[40px] sm:text-[30px] lg:text-[45px] xl:text-[50px] xs:text-[20px]"
        >
          Makes Phonics Fun and Easy{" "}
        </h2>
        <p className="md:text-[25px] sm:text-[15px]  lg:text-[25px] xl:text-[30px] xs:text-[13px]">
          The Ultimate Phonics Learning App for Kids!
        </p>
        <button className=" border-[#D4481B] text-white font-semibold px-4 py-2 rounded-3xl hover:bg-[#ca5a34] bg-[#D4481B] lg:text-[20px] md:text-[15px] xs:text-[10px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeView;
