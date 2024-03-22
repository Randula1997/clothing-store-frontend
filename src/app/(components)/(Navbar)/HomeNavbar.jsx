"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "../(Button)/Button";
import NavItem from "./NavItem";

function HomeNavbar() {
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
      <nav className="z-50 max-md:bg-[rgba(0,0,0,0.1)] max-md:backdrop-filter max-md:backdrop-blur-[5px] max-md:[box-shadow:0_0.5rem_1rem_rgba(0,_0,_0,_0.1)] absolute w-full">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-[2rem] font-bold">
                  Company
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <a
                  ref={counRef}
                  className="text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2 cursor-pointer"
                  onClick={() => setOpenCountries(!openCountries)}
                >
                  Deliver to : LK
                  {openCountries && (
                    <div
                      ref={countryRef}
                      className="bg-white p-4 w-52 h-52 rounded-md overflow-auto shadow-lg absolute top-24"
                    >
                      <ul>
                        {countries.map((countrie) => (
                          <li
                            className="p-2 cursor-pointer rounded hover:bg-[#e7e7e7]"
                            onClick={() => setOpenCountries(false)}
                            key={countrie}
                          >
                            {countrie}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </a>

                <a
                  ref={currRef}
                  className="text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2 cursor-pointer"
                  onClick={() => setOpenCurrencies(!openCurrencies)}
                >
                  LKR
                  {openCurrencies && (
                    <div
                      ref={currencyRef}
                      className="bg-white p-4 w-72 h-72 rounded-md overflow-auto shadow-lg absolute top-24"
                    >
                      <ul>
                        {currencies.map((currencies) => (
                          <li
                            className="p-2 cursor-pointer rounded hover:bg-[#e7e7e7]"
                            onClick={() => setOpenCurrencies(false)}
                            key={currencies}
                          >
                            {currencies}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </a>

                <a
                  ref={langRef}
                  className="text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2 cursor-pointer"
                  onClick={() => setOpenLanguages(!openLanguages)}
                >
                  English
                  {openLanguages && (
                    <div
                      ref={languageRef}
                      className="bg-white p-4 w-52 h-52 rounded-md overflow-auto shadow-lg absolute top-24"
                    >
                      <ul>
                        {languages.map((languages) => (
                          <li
                            className="p-2 cursor-pointer rounded hover:bg-[#e7e7e7]"
                            onClick={() => setOpenLanguages(false)}
                            key={languages}
                          >
                            {languages}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </a>

                <Link href="/login">
                  <NavItem itemName="Sign in" />
                </Link>
                <Link href="/signup">
                  <Button btnWidth="w-32" btnName="Sign up" btnType="button" />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="z-50 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
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

export default HomeNavbar;
