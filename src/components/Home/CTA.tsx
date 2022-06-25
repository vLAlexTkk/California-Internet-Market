import React, { Children } from "react";
import Image from "next/image";
import Link from "next/link";

const ctaItems: { description: string }[] = [
  {
    description: "Phone",
  },
  {
    description: "Charger",
  },
  {
    description: "Gift",
  },
  {
    description: "Google Pixel 3",
  },
  {
    description: "Keyboard",
  },
];

const ctaItemsBottom: { descriptionsec: string }[] = [
  {
    descriptionsec: "iPhone 12",
  },
  {
    descriptionsec: "13 Pro Max",
  },
  {
    descriptionsec: "Laptop",
  },
  {
    descriptionsec: "Mobile",
  },
];

type ButtonSellect = {
  children: React.ReactNode;
};

const Buttons = (props: ButtonSellect) => {
  return (
    <button className="bg-transparent border rounded-full border-grey-300">
      <p className="px-4 py-2 text-10 lg:text-14 font-inter">{props.children}</p>
    </button>
  );
};

const CTA = () => {
  return (
    <section id="#cta">
      <div className="container justify-center py-10 mx-auto">
        <div className="flex flex-col items-center pb-6 space-y-5 text-center">
          <h1 className="text-26 lg:text-42 lg:leading-52">Looking for anything else?</h1>
        </div>
        <div className="flex flex-col items-center pb-10 space-y-2">
          <form action="#search" className="">
            <input
              className="py-2 lg:py-5 w-[290px] lg:w-[500px] pl-10 border rounded-full placeholder-black-900 border-grey-200 bg-grey-300 pr-30 place-content-start"
              type="text"
              placeholder="Search keyword"
            />
          </form>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex-row hidden space-x-2 lg:flex">
              {ctaItems.map(({ description }) => (
                <div>
                  <Buttons>{description}</Buttons>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center space-x-1">
              {ctaItemsBottom.map(({ descriptionsec }) => (
                <div>
                  <Buttons>{descriptionsec}</Buttons>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-grey-400 py-10.5 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center pb-6 space-y-5 text-center">
            <h1 className="text-26 lg:text-42 lg:leading-52">Never miss a thing</h1>
            <p className="text-10 lg:text-16">
              Sign up for texts to be notified about our best offers on the perfect gifts.
            </p>
          </div>
          <div className="items-center">
            <Image src="/techitems/macEdit.svg" width={259} height={250} />
          </div>
          <div className="flex flex-col items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
            <div>
              <form action="#search" className="">
                <input
                  className="py-2 lg:py-2 w-[200px] lg:w-[300px] pl-10 border rounded-full placeholder-black-900 border-grey-200 bg-grey-300 pr-30 place-content-start"
                  type="text"
                  placeholder="Email"
                />
              </form>
            </div>
            <div>
              <button>
                <p className="px-8 py-2 transition-colors rounded-full text-10 lg:text-14 bg-black-900 text-white-100 font-inter hover:bg-white-100 hover:text-black-900">
                  Submit
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
