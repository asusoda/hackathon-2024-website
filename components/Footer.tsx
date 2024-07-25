"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
      <div className="flex flex-col">
        <div className="lg:hidden flex justify-center mb-7 font-bold"/>
      
        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href="https://discord.gg/the-software-developers-association-762811961238618122">
            <span className="sr-only">Discord</span>
           <FaDiscord/>
          </a>
          <div className=" border-r-2 transform rotate-12 " />
          <a href="https://x.com/asu_soda">
            <span className="sr-only">Twitter</span>
            <FaXTwitter/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.linkedin.com/company/thesoda/">
            <span className="sr-only ">LinkedIn</span>
            <FaLinkedinIn/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.youtube.com/@ASUSoDAYoutube">
            <span className="sr-only">YouTube</span>
            <FaYoutube/>
          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://instagram.com/soda.asu">
            <span className="sr-only">Instagram</span>
            <FaInstagram/>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 xl:gap-x-36 items-center justify-around text-xs xl:text-sm">
            <div className="lg:grid grid-cols-3 text-center hidden">
            <a  href="mailto:asu@thesoda.io">
                Contact Us
            </a>
            <div className="mx-5 lg:mx-0 text-center">
              Copyrights © 2024. All rights reserved by The Software Developers Association
            </div>
             <a href="https://discord.gg/the-software-developers-association-762811961238618122" target="_blank" rel="noreferrer">Join Discord</a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
