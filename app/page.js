import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import DetailsGrid from "./_components/DetailsGrid";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <DetailsGrid />
    </div>
  );
}
