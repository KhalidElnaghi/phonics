"use client";
import React, { useState, useEffect } from "react";
import AboutView from "@/components/about/about";
import ContactUsView from "@/components/contact-us/contact-us";
import HomeView from "@/components/home/home";
import Image from "next/image";
import ScrollToTop from "@/components/scroll-btn";

const AppView = () => {
  return (
    <>
      <HomeView />
      <AboutView />
      <ContactUsView />
      <ScrollToTop />
    </>
  );
};

export default AppView;
