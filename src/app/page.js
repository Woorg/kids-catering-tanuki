import clsx from "clsx";

import Atmosphere from "./components/atmosphere/Atmosphere";
import Faq from "./components/faq/Faq";
import Game from "./components/game/Game";
import Hero from "./components/hero/Hero";
import KidsBox from "./components/kids-box/KidsBox";
import Party from "./components/party/Party";
import Testimonials from "./components/testimonials/Testimonials";
import ToyChips from "./components/toyChips/ToyChips";
// import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Party />
      <KidsBox />
      <Game />
      <ToyChips />
      <Atmosphere />
      <Faq className={clsx("")} />
    </>
  );
}
