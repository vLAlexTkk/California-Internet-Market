import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className="w-auto transition-all hover:transition-all  hover:scale-105 sm:w-[642px] md:w-[642px] lg:w-[642px] h-auto bg-white cursor-pointer drop-shadow-lg">
      {props.children}
    </div>
  );
};

const CardLine = (props: CardProps) => {
  return (
    <div className="w-auto h-auto transition-all hover:scale-105 lg:h-[700px] bg-white cursor-pointer drop-shadow-lg">
      {props.children}
    </div>
  );
};

const TechnologyCategory = () => {
  return (
    <section id="#techcategoty" className="h-auto py-10">
      <div className="container flex flex-col mx-auto">
        <div className="pb-20 text-center text-30 leading-25 md:text-40 lg:text-52 lg:leading-70">
          <h1>Shop our latest offers and categories</h1>
        </div>
        <div className="flex flex-col items-center justify-between md:space-x-6 lg:flex-row">
          <div className="flex flex-col items-start pb-5 space-y-8">
            <Card>
              <div className="pb-5 pl-10 space-y-4 pr-15">
                <div className="flex flex-col items-center">
                  <Image src="/techitems/laptop.svg" width={400} height={377} />
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p>Laptop</p>
                  <Link href="#laptop" passHref>
                    <h2 className="hidden transition-colors md:flex lg:flex text-16 md:text-20 xs:leading-30 lg:text-32 hover:transition-colors hover:text-white-200">
                      True Laptop Solution
                    </h2>
                  </Link>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-row items-center justify-between pl-10 space-x-11 pr-15">
                <div className="items-center">
                  <Image src="/techitems/watch.svg" width={381} height={270} />
                </div>
                <div className="flex flex-col items-end justify-end xs:items-center">
                  <p>Watch</p>
                  <Link href="#watch" passHref>
                    <h2 className="hidden transition-colors text-16 md:text-20 xs:leading-30 lg:text-32 hover:transition-colors md:flex lg:flex hover:text-white-200">
                      Not just
                    </h2>
                  </Link>
                  <h2 className="hidden transition-colors text-16 md:text-20 xs:leading-30 lg:text-32 md:flex lg:flex hover:transition-colors hover:text-white-200">
                    stylish
                  </h2>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col items-end space-x-8">
            <CardLine>
              <div className="pb-5 space-y-4">
                <div className="flex flex-col items-center pl-6">
                  <Image src="/techitems/phones.svg" width={296} height={367} />
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                  <p>Phones</p>
                  <Link href="#phone" passHref>
                    <h2 className="hidden transition-colors md:flex lg:flex text-16 md:text-20 xs:leading-30 lg:text-32 hover:transition-colors hover:text-white-200">
                      Your day to day
                    </h2>
                  </Link>
                  <h2 className="hidden transition-colors md:flex lg:flex text-16 md:text-20 xs:leading-30 lg:text-32 hover:transition-colors hover:text-white-200">
                    life
                  </h2>
                </div>
              </div>
            </CardLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCategory;
