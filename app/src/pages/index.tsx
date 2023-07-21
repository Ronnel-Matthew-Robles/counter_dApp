import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Developer Bootcamp</title>
        <meta
          name="description"
          content="Solana Developer Bootcamp"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
