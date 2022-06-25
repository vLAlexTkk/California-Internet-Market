import React from "react";
import Image from "next/image";
import Link from "next/link";

const EditionItems: { title: string; href: string; description: string; imageItem: string }[] = [
  {
    imageItem: "/techitems/watchesEdit.svg",
    title: "Latest and gratest",
    href: "#macbook",
    description: "Smart light bulb pack",
  },
  {
    imageItem: "/techitems/macEdit.svg",
    title: "Best selling",
    href: "#watch",
    description: "Smart Galaxy Watch 3",
  },
  {
    imageItem: "/techitems/macApple.svg",
    title: "Every product",
    href: "#macbookAir",
    description: "Smart Galaxy Watch 3",
  },
];

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className="lg:w-[413px] space-y-5 w-auto h-auto px-4 transition-all hover:transition-all hover:scale-105 lg:h-[453px] bg-white-400 cursor-pointer drop-shadow-lg">
      {props.children}
    </div>
  );
};

const Buttons = () => {
  return (
    <button className="bg-transparent border rounded-full border-black-900">
      <p className="px-12 py-2 text-14 lg:text-18 font-inter hover:bg-white-200 hover:rounded-full hover:transition-colors">
        Explore
      </p>
    </button>
  );
};

const LimitedEdition = () => {
  return (
    <section id="#limedition">
      <div className="container items-center justify-center py-10 mx-auto">
        <div className="flex flex-col items-center pb-6 space-y-5 text-center">
          <h1 className="text-26 lg:text-42 lg:leading-52">See the best around here</h1>
          <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="flex flex-col items-center py-2 space-y-3 text-center lg:space-y-0 lg:space-x-3 lg:flex-row">
          {EditionItems.map(({ imageItem, title, description }, index: number) => (
            <Card>
              <div>
                <p className="pt-6">{description}</p>
                <Link href="#items" passHref>
                  <h3 className="font-bold transition-colors hover:text-white-200 text-30">{title}</h3>
                </Link>
              </div>
              <div className="pb-6">
                <Buttons />
              </div>
              <Image src={imageItem} width={259} height={250} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedEdition;
