import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import HeroBlock from "../components/Home/HeroBlock";
import TechnologyCategory from "../components/Home/TechnologyCategory";
import Store from "../components/Home/Store";
import LimitedEdition from "../components/Home/LimitedEdition";
import Proposalts from "../components/Home/Proposalts";
import CTA from "../components/Home/CTA";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <HeroBlock />
        <TechnologyCategory />
        <Store />
        <LimitedEdition />
        <Proposalts />
        <CTA />
      </Layout>
    </div>
  );
};

export default Home;
