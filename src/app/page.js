// import clsx from "clsx";

import Atmosphere from "./components/atmosphere/Atmosphere";
import Faq from "./components/faq/Faq";
import Game from "./components/game/Game";
import Hero from "./components/hero/Hero";
import KidsBox from "./components/kids-box/KidsBox";
import PartyTanuki from "./components/party/PartyTanuki";
import PartyCaspian from "./components/party/PartyCaspian";
import PartyHorn from "./components/party/PartyHorn";
import Testimonials from "./components/testimonials/Testimonials";
import ToyChips from "./components/toyChips/ToyChips";
// import Image from "next/image";

// export const metadata = {
//   title: "Детские праздникис «Tануки» Home",
//   description:
//     "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось.",
// };

export default async function Home() {
  return (
    <>
      <div className="page__w w-full m-auto">
        <Hero />
        <Testimonials />
        <PartyTanuki />
        <PartyCaspian />
        <PartyHorn />
        <KidsBox />
        <Game />
        <ToyChips />
        <Atmosphere />
        <Faq />
      </div>
    </>
  );
}
