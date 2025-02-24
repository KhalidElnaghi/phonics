import AboutView from "@/components/about/about";
import ContactUsView from "@/components/contact-us/contact-us";
import HomeView from "@/components/home/home";
import React from "react";

const AppView = () => {
  return (
    <>
      <HomeView />
      <AboutView />
      <ContactUsView />
    </>
  );
};

export default AppView;
