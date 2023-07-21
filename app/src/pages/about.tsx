import type { NextPage } from "next";
import Head from "next/head";
import { AboutView } from "../views";


const About: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Developer Bootcamp - About</title>
        <meta
          name="description"
          content="About the developer"
        />
      </Head>
      <AboutView />
    </div>
  );
};

export default About;