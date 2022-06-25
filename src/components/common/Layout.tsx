import React, { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen text-black bg-white text-16">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

