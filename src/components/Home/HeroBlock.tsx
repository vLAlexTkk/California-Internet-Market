import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBlock = () => {
    return (
        <section id="#heroblock" className="bg-white-300">
            <div className="container h-[500px] mx-auto items-center justify-center flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col items-center space-y-6 lg:space-y-10 lg:items-start">
                    <h1 className="text-center lg:text-left text-40 lg:text-52 leading-70">
                    The new phones are <br /> here  take a look.
                    </h1>
                    <Link href="#explore" passHref>
                        <button className="bg-transparent border rounded-full border-black-900">
                            <p className="px-10 py-4 text-14 lg:text-18 font-inter hover:bg-white-200 hover:rounded-full hover:transition-colors">Explore</p>
                        </button>
                    </Link>
                </div>
                <div className="flex-row hidden lg:flex">
                    <Image src="/telephoneimg.png" width={647} height={550}></Image>
                </div>
            </div>
        </section>
    )
}

export default HeroBlock