import React from "react";
import Item from "./FooterItem";
import Icon from "../(Icon)/Icon";
import fbIcon from "../../../assets/images/facebook.svg";
import googleIcon from "../../../assets/images/google.svg";
import appleIcon from "../../../assets/images/apple_Icon.png";
import { COMPANYINFO, HELPANDSUPPORT, CUSTOMERCARE, FINDUSON } from "./Menus";

function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-6">
        <Item Links={COMPANYINFO} title="COMPANY INFO" />
        <Item Links={HELPANDSUPPORT} title="HELP & SUPPORT" />
        <Item Links={CUSTOMERCARE} title="CUSTOMER CARE" />
        <Item Links={FINDUSON} title="FIND US ON" />
      </div>

      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#F4F6F8] py-7">
        <h1 className="rounded-md md:mb-0 font-bold mb-6 lg:leading-normal fw-bold md:w-2/5">
          Get the code and receive $1 for free.
        </h1>
        <div>
          <input
            type="text"
            placeholder="Your email address"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-5 focus:outline-none"
          />
          <button
            className="bg-black hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>

      <div className="grid gap-10 pt-7 text-[#9B9B9B] text-sm pb-4 px-5 grid-cols-[5fr_1fr] sm:px-8 max-sm:grid-cols-[1fr]">
        <span>
          Copyright @ 2023. All rights reserved by Company. Developed by Caltech
          Australia. Terms · Privacy Policy
        </span>
        <div className="flex gap-2 items-center justify-start">
          <Icon iconSrc={fbIcon} iconBg="bg-white" />
          <Icon iconSrc={googleIcon} iconBg="bg-white" />
          <Icon iconSrc={appleIcon} iconBg="bg-white" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
