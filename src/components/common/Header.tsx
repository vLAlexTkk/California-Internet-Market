import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const headerLinks: { title: string; href: string }[] = [
  { title: "All products", href: "#products" },
  { title: "Solutions", href: "#solutions" },
  { title: "About", href: "#about" },
  { title: "Support", href: "#support" },
];

const headerLinksMobile: { title: string; href: string }[] = [
  { title: "All products", href: "#products" },
  { title: "About", href: "#about" },
  { title: "Support", href: "#support" },
];

const Header = () => {
  return (
    <header>
      <section id="#header" className="h-[80px] items-baseline bg-white">
        <div className="container flex items-center justify-between py-6 mx-auto md:flex-row xs:space-y-1 lg:flex-row xs:space-x-5">
          <div>
            <Image src="/logo/logo.svg" width={170} height={21} />
          </div>
          <div className="flex flex-row">
            <div className="flex-row hidden space-x-[15px] uppercase items-baceline lg:flex">
              {headerLinks.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <span className="cursor-pointer hover:text-white-200 hover:transition-colors">{title}</span>
                </Link>
              ))}
            </div>
            <div className="hidden flex-row uppercase space-x-[15px] items-baceline sm:flex md:flex lg:hidden">
              {headerLinksMobile.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <span className="cursor-pointer hover:text-white-200 hover:transition-colors">{title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <div>
              <Image src="/icons/eyeglass.svg" width={24} height={24} />
            </div>
            <div>
              <Image src="/icons/car.svg" width={40} height={24} />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
