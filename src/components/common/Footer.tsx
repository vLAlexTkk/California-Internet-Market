import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks: { title: string; href: string }[] = [
  { title: "Phones", href: "#phones" },
  { title: "Watch", href: "#watch" },
  { title: "Tablet", href: "#tablet" },
  { title: "Laptops", href: "#laptops" },
];

const companyLinks: { title: string; href: string }[] = [
  { title: "About", href: "#about" },
  { title: "Support", href: "#support" },
];

const followLinks: { title: string; href: string }[] = [
  { title: "Instagram", href: "#instagram" },
  { title: "Facebook", href: "#facebook" },
  { title: "LinkedIn", href: "#linkedit" },
  { title: "YouTube", href: "#youtube" },
];

const Footer = () => {
  return (
    <footer className="bg-grey-200">
      <section id="#footer" className="lg:h-auto xs:h-auto">
        <div className="container flex flex-col justify-between py-10 mx-auto sm:justify-evenly sm:flex-row md:flex-row lg:flex-row">
          <div className="flex flex-col items-center pb-6 space-y-4 lg:items-start">
            <Image src="/logo/logo.svg" width={170} height={21} />
            <p className="font-inter">
              Sign for texts to be notified about <br /> our best offers on the perfect gifts.
            </p>
          </div>
          <div className="pb-4 space-y-6 text-center">
            <h2 className="font-normal leading-22 font-inter text-16 lg:text-22">All products</h2>
            <div className="flex flex-col space-y-3">
              {footerLinks.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <span className="cursor-pointer xs:text-12 hover:text-white-200 hover:transition-colors">{title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-6 space-y-6 text-center">
            <h2 className="hidden font-normal md:flex leading-22 font-inter text-16 lg:text-22">Company</h2>
            <div className="flex-col hidden space-y-3 md:flex">
              {companyLinks.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <span className="cursor-pointer xs:text-12 hover:text-white-200 hover:transition-colors">{title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-6 space-y-6 text-center">
            <h2 className="hidden font-normal md:flex leading-22 font-inter text-16 lg:text-22">Follow Us</h2>
            <div className="flex-col hidden space-y-3 md:flex">
              {followLinks.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <span className="cursor-pointer xs:text-12 hover:text-white-200 hover:transition-colors">{title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
