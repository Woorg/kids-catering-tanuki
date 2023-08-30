import Container from "../container/Container";
import Image from "next/image";
import ImgOne from "@images/content/game/img-1.webp";
import ImgTwo from "@images/content/game/img-2.webp";
import ImgThree from "@images/content/game/img-3.webp";
import BigImg from "@images/content/game/img-big.webp";

import SliderImgOne from "@images/content/toychips/toy-chip-1.webp";
import SliderImgTwo from "@images/content/toychips/toy-chip-2.webp";
import SliderImgThree from "@images/content/toychips/toy-chip-3.webp";
import SliderImgFourth from "@images/content/toychips/toy-chip-4.webp";
import SliderImgFive from "@images/content/toychips/toy-chip-5.webp";
import SliderImgSix from "@images/content/toychips/toy-chip-6.webp";

import Button from "@components/ui/button/Button";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, A11y } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

const Game = () => {
  const data = {
    title: "Вступайте в игру!",
    list: [
      {
        text: "Получайте стикер за каждый купленный Kids Box",
        image: ImgOne,
        alt: "Image 1",
      },
      {
        text: "Соберите все 6 стикеров в стикерпак",
        image: ImgTwo,
        alt: "Image 2",
      },
      {
        text: "Получите игру в подарок",
        image: ImgThree,
        alt: "Image 3",
      },
    ],
    badge: "Игра “Вперёд, Тануки”",
  };
  return (
    <section className="game rounded-default bg-orange lg:mb-3 mb-2">
      <Container className="game__container lg:py-10 container flex flex-col items-center py-6">
        <h2 className="game__title title title_smaller lg:mb-9 font-seymour max-w-xl m-auto mb-6 text-5xl text-center text-white">
          {data.title}
        </h2>
        {data.list && (
          <ul className="game__list lg:max-w-4xl w-full max-w-sm">
            {data.list.map((item, key) => (
              <li
                key={`__${key}__`}
                className="game__item relative last:mb-0  lg:mb-3 lg:gap-10 shrink-0  flex items-center gap-0  mb-1 h-[90px] lg:h-[132px] text-left"
              >
                <span className="game__item-num lg:w-28 lg:text-4xl w-14 flex justify-center flex-shrink-0 text-2xl font-bold text-center">
                  {key + 1}
                </span>
                <span className="game__item-text lg:text-xl lg:leading-6 mr-auto text-sm font-medium leading-5">
                  {item.text}
                </span>
                <figure className="game__item-image relative">
                  <Image
                    src={item.image.src}
                    alt={item.alt}
                    width={item.image.width}
                    height={item.image.height}
                    blurDataURL={item.image.blurDataURL}
                    placeholder="blur"
                  />
                </figure>
              </li>
            ))}
          </ul>
        )}

        <div className="game__badge badge badge_white lg:mt-9 mb-9 lg:mb-10 mt-6">
          {data.badge}
        </div>

        <Image
          className="game__big-image max-w-[292px] lg:max-w-[701px]  lg:-mb-20 -mb-12"
          src={BigImg.src}
          alt="Big image"
          width={BigImg.width}
          height={BigImg.height}
          blurDataURL={BigImg.blurDataURL}
          placeholder="blur"
        />
      </Container>
    </section>
  );
};

export default Game;
