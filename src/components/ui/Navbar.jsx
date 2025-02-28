"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto p-4 rounded-lg bg-slate-900 sticky top-2">

const Navbar = () => {
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
      <Link href="#">
        <Image
          alt="logo"
          src={
            "/HfM_logo.png"
            // "https://hormonesforme.com/wp-content/uploads/2024/08/2.png"
            // "https://www.primalzone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ed0f3d45.png&w=1920&q=75"
          }
          width={100}
          height={50}
        />
      </Link>
      <div className="flex flex-row gap-6">
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
      <div className="flex flex-row gap-4">
        <button className="btn btn-outline gradient-btn">Patient Portal</button>
        <button className="btn btn-primary gradient-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
