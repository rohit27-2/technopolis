import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import DetailsGrid from "./_components/DetailsGrid";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
      <link rel='icon' href='favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <DetailsGrid />
    </div>
  );
}
