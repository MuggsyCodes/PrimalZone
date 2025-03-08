"use client";

import Image from "next/image";
import Link from "next/link";
import { HamIcon, MenuIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change bg after 50px scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // array of javascript objects
  const navLinks = [
    {
      id: 0,
      title: "Treatments",
      href: "#treatments",
    },
    {
      id: 1,
      title: "How it Works",
      href: "#how-it-works",
    },
    {
      id: 2,
      title: "Talk to Us",
      href: "#talk-to-us",
    },
    {
      id: 3,
      title: "Journey's",
      href: "#journeys",
    },
    {
      id: 4,
      title: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <nav
      className={`flex flex-row items-center justify-between max-w-7xl ml-2 p-4 rounded-lg fixed w-[98%] top-2 translate-x-[50%] right-1/2 z-20 ${
        isScrolled ? "bg-neutral-900/90" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          alt="logo"
          src={
            "https://www.primalzone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ed0f3d45.png&w=3840&q=75"
          }
          width={200}
          height={50}
        />
      </Link>
      <div className="hidden lg:flex flex-row gap-5">
        {navLinks.map((link) => (
          <Link
            href={`/${link.href}`}
            key={link.id}
            className="hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Link href="/login" className="hidden sm:flex btn btn-outline">
          Patient Portal
        </Link>
        <button
          onClick={() => document.getElementById("sign_up_modal").showModal()}
          className="hidden sm:flex btn btn-primary gradient-btn"
        >
          Get Started
        </button>
        <div className="flex lg:hidden relative">
          <MenuIcon
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Menu = () => {
  return (
    <div className="p-4 w-64 rounded-lg  absolute top-12 right-0 flex flex-col gap-4 bg-black/90 backdrop-blur-lg border border-white/30">
      <ul className="flex flex-col gap-4 text-center">
        <li>
          <Link href="#treatments">Treatments</Link>
        </li>
        <li>
          <Link href="#how-it-works">How It Works</Link>
        </li>
        <li>
          <Link href="#talk-to-us">Talk To Us</Link>
        </li>
        <li>
          <Link href="#journeys">Journey's</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-2 sm:hidden">
        <Link href="/login" className="btn btn-outline">
          Patient Portal
        </Link>
        <button
          onClick={() => document.getElementById("sign_up_modal").showModal()}
          className="btn gradient-btn"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
