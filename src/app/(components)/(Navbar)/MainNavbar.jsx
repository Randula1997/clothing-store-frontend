"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "../(Button)/Button";
import NavItem from "./NavItem";
import user from "../../../assets/images/person-outline.svg";
import chat from "../../../assets/images/chatbubble-outline.svg";
import cart from "../../../assets/images/cart-outline.svg";
import Icon from "../(Icon)/Icon";

function MainNavbar() {
  const countries = [
    "France",
    "United States",
    "Spain",
    "China",
    "Italy",
    "United Kingdom",
    "Germany",
    "Mexico",
    "Australia",
    "Turkey",
    "Sri Lanka",
  ];
  const currencies = [
    "USD - United States Dollar",
    "EUR - Euro",
    "JPY - Japanese Yen",
    "GBP - British Pound Sterling",
    "AUD - Australian Dollar",
    "CAD - Canadian Dollar",
    "CHF - Swiss Franc",
    "HKD - Hong Kong Dollar",
    "NZD - New Zealand Dollar",
    "LKR - Sri Lankan Rupee",
  ];
  const languages = [
    "English",
    "Italiano",
    "Francais",
    "Nederlands",
    "Deutsch",
    "日本語",
  ];

  const [openCountries, setOpenCountries] = useState(false);
  const [openCurrencies, setOpenCurrencies] = useState(false);
  const [openLanguages, setOpenLanguages] = useState(false);

  const countryRef = useRef();
  const counRef = useRef();

  const currencyRef = useRef();
  const currRef = useRef();

  const languageRef = useRef();
  const langRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== countryRef.current && e.target !== counRef.current) {
      setOpenCountries(false);
    }

    if (e.target !== currencyRef.current && e.target !== currRef.current) {
      setOpenCurrencies(false);
    }

    if (e.target !== languageRef.current && e.target !== langRef.current) {
      setOpenLanguages(false);
    }
  });

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="z-50 max-md:bg-[rgba(255,255,255,0.1)] max-md:backdrop-filter max-md:backdrop-blur-[5px] relative m-auto">
        <div className="mx-auto pt-8 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center max-sm:hidden">
              <div className="flex-shrink-0">
                <a href="/" className="text-[2rem] font-bold">
                  Company
                </a>
              </div>
            </div>
            <div className="z-0 flex w-full items-center justify-center max-sm:justify-start">
              <div className="bg-[#ffffff] flex justify-center items-center gap-4 rounded-full pr-1.5 mx-5 [box-shadow:0_10px_25px_rgba(0,0,0,0.1)] max-sm:pr-0.5 max-sm:mx-3">
                <input
                  type="text"
                  placeholder="What are you looking for ?"
                  className={`w-full py-3 px-5 bg-transparent h-100 rounded-full max-sm:w-full max-sm:py-2.5`}
                />
                <Button btnWidth="w-40" btnName="Search" btnType="button" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 justify-center">
                <Icon
                  iconSrc={chat}
                  iconBg="bg-transparent"
                  iconHover="hover:[box-shadow:0_10px_25px_rgba(0,0,0,0.1)]"
                />
                <Icon
                  iconSrc={cart}
                  iconBg="bg-transparent"
                  iconHover="hover:[box-shadow:0_10px_25px_rgba(0,0,0,0.1)]"
                />
                <Icon
                  iconSrc={user}
                  iconBg="bg-transparent"
                  iconHover="hover:[box-shadow:0_10px_25px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="z-50 inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="z-50 px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <Link href="/cart">
                <NavItem itemName="Your cart" />
              </Link>
              <Link href="/login">
                <NavItem itemName="Sign in" />
              </Link>
              <Link href="/signup">
                <NavItem itemName="Sign up" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default MainNavbar;
