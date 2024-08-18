"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://instagram.com/soda.asu",
    discord: "https://discord.gg/the-software-developers-association-762811961238618122",
    linkedin: "https://www.linkedin.com/company/thesoda/",
    twitter: "https://x.com/asu_soda",
    email: "mailto:asu@thesoda.io",
    mail: "asu@thesoda.io",
  };

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-2 lg:pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col items-center">
        <div className="lg:hidden flex justify-center mb-7 font-bold" />
        
        {/* Social media logos */}
        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href={SOCIALS.discord}>
            <span className="sr-only">Discord</span>
            <FaDiscord />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.twitter}>
            <span className="sr-only">Twitter</span>
            <FaXTwitter />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href="https://www.youtube.com/@ASUSoDAYoutube">
            <span className="sr-only">YouTube</span>
            <FaYoutube />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.instagram}>
            <span className="sr-only">Instagram</span>
            <FaInstagram />
          </a>
        </div>

        {/* Footer content hidden on mobile */}
        <div className="hidden lg:flex w-full justify-center">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 xl:gap-x-36 text-xs xl:text-sm">
              <a href={SOCIALS.email}>
                Contact Us
              </a>
              <div className="mx-5 lg:mx-0">
                Copyrights © 2024. All rights reserved by The Software Developers Association
              </div>
              <a href={SOCIALS.discord} target="_blank" rel="noreferrer">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
