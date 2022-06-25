import React from "react";
import Link from "next/link";
import Image from "next/image";

const StoreItems: { title: string; href: string; description: string; price: string; imageItem: string }[] = [
  {
    imageItem: "/macbook.svg",
    title: "MacBook Pro 13",
    href: "#macbook",
    description: "MacBook Pro 13",
    price: "$ 1,200.00 USD",
  },
  {
    imageItem: "/watches.svg",
    title: "Smart Galaxy Watch 3",
    href: "#watch",
    description: "Smart Galaxy Watch 3",
    price: "$ 199.00 USD",
  },
  {
    imageItem: "/macbookm1.svg",
    title: "MacBook Air M1",
    href: "#macbookAir",
    description: "MacBook Air M1",
    price: "$ 1,009.00 USD",
  },
  { imageItem: "/ipad.svg", title: "iPad", href: "#ipad", description: "iPad", price: "$ 610.00 USD" },
];

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className="w-[300px] px-4 transition-all hover:transition-all hover:scale-105 h-[300px] bg-white cursor-pointer drop-shadow-lg">
      {props.children}
    </div>
  );
};

const Store = () => {
  return (
    <section id="store">
      <div className="container items-center justify-center h-auto py-10 mx-auto">
        <div className="space-y-2 text-center py-15 flex-flex-col">
          <h1 className="text-30 lg:text-52">Save on our most selled items.</h1>
          <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 lg:items-baseline lg:space-x-10 lg:flex-row">
          {StoreItems.map(({ imageItem, title, href, description, price }, index: number) => (
            <Card>
              <Image src={imageItem} width={247} height={214} />
              <div>
                <Link href="#items" passHref>
                  <h3 className="transition-colors hover:text-white-200">{title}</h3>
                </Link>
                <p>{description}</p>
                <p className="">{price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
