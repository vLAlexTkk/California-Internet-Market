import React from "react";
import Image from "next/image";

const proposaltItems: { description: string }[] = [
  {
    description: "We Make It Easy To Find The Great Design Talent, Easier...",
  },
  {
    description: "Road Design Handbook For The International Road...",
  },
  {
    description: "The Best Kept Secrets About Creative People",
  },
];

const Proposalts = () => {
  return (
    <section id="#ideas">
      <div className="container items-center justify-center py-10 mx-auto">
        <div className="flex flex-col items-center pb-6 space-y-5 text-center">
          <h1 className="text-26 lg:text-42 lg:leading-52">Ideas have a place here</h1>
          <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="flex flex-col items-center justify-between py-2 space-y-3 text-center lg:space-y-0 lg:space-x-3 lg:flex-row">
          <div>
            <Image src="/daylight.svg" width={620} height={420} />
          </div>
          <div className="flex flex-col space-y-5">
            {proposaltItems.map(({ description }, index: number) => (
              <p>{description}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposalts;
