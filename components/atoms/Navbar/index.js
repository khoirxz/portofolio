import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../../../styles/Navbar.module.css";

const data = ["Home", "About", "Contact"];

const Navbar = () => {
  return (
    <nav className="navbar max-w-screen-2xl w-9/12 m-auto py-4 z-10 fixed left-1/2 -translate-x-1/2 bg-glass backdrop-blur-sm">
      <div className=" flex flex-row items-center justify-between">
        <div className="flex items-center">
          <svg
            style={{ margin: "0 5 0 5" }}
            width="32"
            height="32"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55 0L102.631 27.5V82.5L55 110L7.3686 82.5V27.5L55 0Z"
              fill="white"
            />
            <path
              d="M40 56L50.3923 61V71L40 76L29.6077 71V61L40 56Z"
              fill="black"
            />
            <path
              d="M55 34L65.3923 39V49L55 54L44.6077 49V39L55 34Z"
              fill="black"
            />
            <path
              d="M70 56L80.3923 61V71L70 76L59.6077 71V61L70 56Z"
              fill="black"
            />
          </svg>
          <Link href="/">
            <h1 className="hidden md:block font-bold cursor-pointer text-2xl">
              The Void
            </h1>
          </Link>
        </div>

        <ul className="flex flex-row items-center justify-between">
          {data.map((item, i) => (
            <li
              className="hidden md:block mx-4 px-4 font-thin cursor-pointer text-base relative "
              key={i}
            >
              <Link href={`#/${item.toLowerCase()}`}>
                <a className="style-link uppercase inline-block">{item}</a>
              </Link>
            </li>
          ))}
          <li className="md:hidden sm:block">
            <a className="cursor-pointer w-8 h-8">
              <svg
                width="28"
                height="28"
                viewBox="0 0 100 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M56.5546 7.84751L64.905 17.7237L80.1106 34.9998L72.869 43.3333L74.7487 45.2512L92.8568 62.9989L100 70L92.8568 77.001L74.7487 94.7487L72.8201 96.7165L80.1106 105L65.0148 122.372L56.7272 132.301L50.2216 140.095L43.6668 132.342L35.3164 122.466L20.1109 105.19L27.3358 96.8755L25.2513 94.7487L7.14322 77.001L0 70L7.14322 62.9989L25.2513 45.2512L27.2087 43.2541L20.1109 35.1898L35.2067 17.8178L43.4943 7.88889L49.9999 0.0949707L56.5546 7.84751ZM33.8336 50.7811L32.393 52.2509L32.3227 52.3226L32.2509 52.393L14.2864 69.9999L32.2509 87.6069L32.3227 87.6773L32.393 87.749L33.9161 89.303L35.2067 87.8178L43.4943 77.8889L49.9999 70.095L56.5546 77.8475L64.905 87.7237L66.1951 89.1895L67.607 87.749L67.6773 87.6773L67.7491 87.6069L85.7136 70L67.7491 52.393L67.6773 52.3226L67.607 52.2509L66.2887 50.9058L65.0148 52.3718L56.7272 62.3007L50.2216 70.0946L43.6668 62.3421L35.3164 52.4659L33.8336 50.7811ZM59.2665 43.7411L57.4665 45.8125L57.4014 45.8875L57.3377 45.9638L50.1724 54.5482L42.9528 46.0093L42.8886 45.9335L42.823 45.8589L40.8523 43.6199L50 34.2864L59.2665 43.7411ZM65.8468 36.1686L57.0011 27.1432L50 20L42.9989 27.1432L34.2274 36.0929L33.3955 35.1477L42.755 24.377L42.8201 24.3021L42.8837 24.2258L50.0491 15.6414L57.2687 24.1802L57.3328 24.2561L57.3985 24.3307L66.826 35.0418L65.8468 36.1686ZM33.3955 105.148L34.3579 104.04L42.9989 112.857L50 120L57.0011 112.857L65.8014 103.878L66.826 105.042L57.4665 115.813L57.4014 115.888L57.3377 115.964L50.1724 124.548L42.9528 116.009L42.8886 115.933L42.823 115.859L33.3955 105.148ZM50 105.714L59.1764 96.3507L57.3985 94.3307L57.3328 94.2561L57.2687 94.1802L50.0491 85.6414L42.8837 94.2258L42.8201 94.3021L42.755 94.377L40.9382 96.4677L50 105.714Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
